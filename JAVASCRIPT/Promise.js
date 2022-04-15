const Promise = require("./promise-polyfill.js");

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("成功");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("失败");
//     }, 1000);
//   }),
//   1,
//   2,
//   3,
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err, "errr");
//   });

// Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(2);
//     }, 1000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 5000);
//   }),
// ]).then(console.log, console.log);//Promise.race跟Promise.all一样，得到结果后不会终止其他已执行的promise

// Promise.resolve(1)
//   .finally(() => {
//     return 2;
//   })
//   .then(console.log); //1

// Promise.reject(1)
//   .finally(() => {
//     throw 2;
//   })
//   .catch(console.log); //2

// Promise.reject(7)
//   .finally(() => {
//     return new Promise(() => {
//       throw 8;
//     });
//   })
//   .catch(console.log); //8

// Promise.resolve(3)
//   .finally(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(4);
//       }, 1000);
//     });
//   })
//   .then(console.log); //3

// Promise.reject(5)
//   .finally(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(6);
//       }, 2000);
//     });
//   })
//   .catch(console.log); //6

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 0);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 2000);
});

Promise.allSettled([p1, p2, p3]).then(console.log, console.log);
