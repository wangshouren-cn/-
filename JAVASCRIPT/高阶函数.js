function foo(...args) {
  // 核心代码
  // ....
  console.log("core", args);
  // ....
}
Function.prototype.before = function (cb) {
  // this = foo
  return (...args) => {
    // newFoo
    cb();
    this(...args);
  };
};
let newFoo = foo.before(() => {
  console.log("before");
});
newFoo("a", "b");

function compose(...fns) {
  return function (...args) {
    let first = true;
    for (let i = fns.length - 1; i >= 0; i--) {
      args = first ? fns[i](...args) : fns[i](args);
      first = false;
    }
    return args;
  };
}

function add1(str) {
  return "1" + str;
}
function add2(str) {
  return "2" + str;
}
function add3(str) {
  return "3" + str;
}
console.log(compose(add1, add2, add3)("str"));
