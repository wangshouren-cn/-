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
