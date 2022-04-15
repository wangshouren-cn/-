const state = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
function resolvePromise(x, p, resolve, reject) {
  if (x === p) throw TypeError("circle promise");
  let called = false; //!加锁是为了保证兼容性，因为在项目中可能会使用其他promise的包
  if ((typeof x === "object" && x != null) || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(y, p, resolve, reject); //!y有可能是promise
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    if (called) return;
    called = true;
    resolve(x);
  }
}
class Promise {
  constructor(executor) {
    this.state = state.PENDING;
    this.value = this.reason = null;
    this.onfulfilledCallbacks = [];
    this.onrejectedCallbacks = [];
    const resolve = (value) => {
      if (this.state === state.PENDING) {
        if (value instanceof Promise) return value.then(resolve, reject); //!resolve(promise)会等待这个promise的结果
        this.value = value;
        this.state = state.FULFILLED;
        this.onfulfilledCallbacks.forEach((f) => f());
      }
    };
    const reject = (reason) => {
      if (this.state === state.PENDING) {
        this.reason = reason;
        this.state = state.REJECTED;
        this.onrejectedCallbacks.forEach((f) => f());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onfulfilled, onrejected) {
    if (typeof onfulfilled !== "function") onfulfilled = (v) => v;
    if (typeof onrejected !== "function")
      onrejected = (r) => {
        throw r;
      };

    let p = new Promise((resolve, reject) => {
      if (this.state === state.FULFILLED) {
        setTimeout(() => {
          try {
            resolvePromise(onfulfilled(this.value), p, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.state === state.REJECTED) {
        setTimeout(() => {
          try {
            resolvePromise(onrejected(this.reason), p, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        //!将函数放入数组这个操作是同步执行的
        this.onfulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              resolvePromise(onfulfilled(this.value), p, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onrejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              resolvePromise(onrejected(this.reason), p, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return p;
  }
  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }
  catch(onrejected) {
    return this.then(null, onrejected);
  }
  finally(onfinally) {
    return this.then(
      (data) => {
        //如果这里面抛出错误 或者 onfinally()里的promise调用了reject，则会传到下面的then中，
        //但then的第二个回调没写，则then会传递该错误直到被捕获
        return Promise.resolve(onfinally()).then(() => data);
      },
      (reason) => {
        //如果这里面抛出错误 或者 onfinally()里的promise调用了reject，则会传到下面的then中，
        //但then的第二个回调没写，则then会传递该错误直到被捕获
        return Promise.resolve(onfinally()).then(() => {
          throw reason;
        });
      }
    );
  }
  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }
  static race(promises) {
    return new Promise((resolve, reject) => {
      // let first = true; 因为promise的状态不能更改，每次调用resolve都会更改状态，所以不用加锁
      for (let i = 0; i < promises.length; i++) {
        const p = promises[i];
        if (p && typeof p.then === "function") {
          p.then(
            resolve,
            reject
            /*
            这里写复杂了
            (data) => {
              if (first) {
                resolve(data);
                first = false;
              }
            },
            (reason) => {
              if (first) {
                reject(reason);
                first = false;
              }
            }
            */
          );
        } else {
          resolve(p);
        }
      }
    });
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      let result = [],
        times = 0;
      const processSuccess = (index, val) => {
        result[index] = val;
        //错误写法  if (result.length === promises.length)
        if (++times === promises.length) {
          resolve(result);
        }
      };
      for (let i = 0; i < promises.length; i++) {
        const p = promises[i];
        if (p && typeof p.then === "function") {
          p.then((data) => {
            processSuccess(i, data);
          }, reject); //如果其中某一个promise失败了 直接执行失败即可
        } else {
          processSuccess(i, p);
        }
      }
    });
  }
  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let result = [],
        times = 0;
      const processSuccess = (index, val) => {
        result[index] = val;
        //错误写法  if (result.length === promises.length)
        if (++times === promises.length) {
          resolve(result);
        }
      };
      for (let i = 0; i < promises.length; i++) {
        const p = promises[i];
        if (p && typeof p.then === "function") {
          p.then(
            (data) => {
              processSuccess(i, data);
            },
            (reason) => {
              processSuccess(i, reason);
            }
          );
        } else {
          processSuccess(i, p);
        }
      }
    });
  }
  static any(promises) {
    return new Promise((resolve, reject) => {
      let result = [],
        times = 0;
      const processSuccess = (index, val) => {
        result[index] = val;
        //错误写法  if (result.length === promises.length)
        if (++times === promises.length) {
          reject(result);
        }
      };
      for (let i = 0; i < promises.length; i++) {
        const p = promises[i];
        if (p && typeof p.then === "function") {
          p.then(resolve, (reason) => {
            processSuccess(i, reason);
          });
        } else {
          resolve(p);
        }
      }
    });
  }
}
Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
module.exports = Promise;
