function fn1(name, age) {
  this.name = name;
  this.age = age;
}
function fn2() {
  console.log(2);
}
Function.prototype.call = function (context, ...args) {
  if (context == null) {
    return this(...args);
  }
  if (typeof context != "object" && typeof context != "function")
    context = new context.constructor(context);
  const symbolKey = Symbol("callKey");

  //关键代码
  context[symbolKey] = this;
  const result = context[symbolKey](...args);
  delete context[symbolKey];
  //关键代码

  return result;
};
//注意new fn的情况
Function.prototype.bind = function (context, ...args1) {
  const fn = this;
  bindFn.prototype = this.prototype;
  function bindFn(...args2) {
    //如果直接return function bindFn回报错bindFn is not defined，也就是说return后面的部分不会变量提升
    if (this instanceof bindFn) {
      //处理new的情况 注意if判断的是bindFn 不是fn
      context = this;
    }
    fn.call(context, ...args1, ...args2);
  }
  return bindFn;
};
fn1.prototype.say = function () {
  console.log(`say`);
};
fn1.call.call(fn2); //2

fn1.call.bind(fn2)(); //2

newFn = fn1.bind(null, "xxx");
let instance = new newFn(18);
instance.say(); //say
console.log(instance); //fn1 { name: 'xxx', age: 18 }
