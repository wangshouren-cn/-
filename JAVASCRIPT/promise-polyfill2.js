
const PENDING = "PENDING"
const REJECT = "REJECT"
const FULFILL = "FULFILL"

function resolvePromise(p, x, rs, rj) {
  if (p === x) {
    throw TypeError("promise circle");
  }

  //成为promise的只有可能是对象或者函数，也就是引用类型
  if ((x != null && typeof x === "object") || typeof x === "function") {

    let called = false;

    try {
      //这里为什么要try呢，在then里面不是已经包裹了try吗？
      //因为下面还会调用resolvePromise，调用的时候没有包裹try

      let then = x.then; //可能报错的地方

      if (typeof then === "function") {
        //这里就是处理x是promise的情况
        then.call(x, (v) => {
          if (!called) {
            //这里v有可能还是promise吧
            called = true;
            resolvePromise(p, v, rs, rj)
          }
        }, (e) => {
          if (!called) {
            called = true;
            rj(e)
          }
        })

      } else {
        //x是对象但不是promise
        rs(x);
      }
    } catch (e) {
      if (!called) {
        called = true;
        rj(e);
      }
    }
  } else {
    //x是基础值
    rs(x);
  }
}

class Promise {
  constructor(executor) {

    this.value = this.reason = null;

    //错啦，这里写成了一个引用地址
    // this.onFulfilledCallbacks = this.onRejectedCallbacks = []

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    this.state = PENDING

    const resolve = (value) => {

      if (this.state != PENDING) return;

      //这里是resolve和reject处理不一样的地方
      if (value instanceof Promise) return value.then(resolve, reject);

      //这里要注意状态更改必须放在前面
      this.state = FULFILL
      this.value = value;
      this.onFulfilledCallbacks.forEach(f => f());
    }

    const reject = (reason) => {

      if (this.state != PENDING) return;

      this.state = REJECT
      this.reason = reason;
      this.onRejectedCallbacks.forEach(f => f());
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }


  then(onFulfill, onReject) {
    const p2 = new Promise((resolve, reject) => {
      if (typeof onFulfill != "function") onFulfill = (v) => v;
      if (typeof onReject != "function") onReject = (r) => { throw r };

      if (this.state === REJECT) {
        //这里用setTimeout模拟加入微任务队列去执行，源代码是如果是已经失败，则直接将其加入微任务队列中
        setTimeout(() => {
          try {
            const x = onReject(this.reason);
            resolvePromise(p2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === FULFILL) {
        setTimeout(() => {
          try {
            const x = onFulfill(this.value);
            resolvePromise(p2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === PENDING) {
        //还是等待态，则在状态改变后再将其加入微任务队列中

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onReject(this.reason);
              resolvePromise(p2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })

        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfill(this.value);
              resolvePromise(p2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }

    })

    return p2
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