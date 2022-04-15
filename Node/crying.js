const crying = (fn) => {
  // newFoo = crying(foo) newFoo()()()
  const inner = (args = []) =>
    fn.length <= args.length
      ? fn(...args)
      : (...newArgs) => inner([...args, ...newArgs]);
  return inner();
};
const crying2 = (fn) => {
  // newFoo = crying(foo) newFoo() newFoo() newFoo()
  let allArgs = [];
  return function inner(...args) {
    allArgs = [...allArgs, ...args];
    if (allArgs.length >= fn.length) {
      fn(...allArgs);
    }
  };
};
// function sum(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// const sum1 = crying(sum);
// sum1(1, 2)(3)(4);

//todo 应用场景1  封装类型检测函数
const isType = (type, val) =>
  Object.prototype.toString.call(val) === `[object ${type}]`;
const utils = {};
[
  "String",
  "Number",
  "Object",
  "Null",
  "Undefined",
  "Function",
  "Symbol",
].forEach((type) => {
  utils[`is${type}`] = crying(isType)(type);
});
console.log(utils.isString("abc"));
console.log(utils.isNumber(123));
console.log(utils.isObject({}));
//todo 应用场景2  在不同页面中调用ajax请求，等返回所有结果以后再渲染页面
let waitAllData = crying2(function (data1, data2, data3) {
  //render
  console.log(data1, data2, data3);
});

Promise.resolve().then(() => {
  console.log("received data1");
  waitAllData("data1");
});
Promise.resolve().then(() => {
  console.log("received data2");
  waitAllData("data2");
});
Promise.resolve().then(() => {
  console.log("received data3");
  waitAllData("data3");
});
