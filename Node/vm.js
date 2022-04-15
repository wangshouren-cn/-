const vm = require("vm");
global.a = 1;
var b = 2;

// vm.runInThisContext("console.log(typeof a)"); //number
// vm.runInThisContext("console.log(typeof this.a)"); //number this相当于global
// vm.runInThisContext("console.log(typeof b)"); //undefined
// vm.runInThisContext("console.log(typeof require)"); //undefined
let obj = {c:3}
vm.runInNewContext("a = typeof a",obj); //undefined
vm.runInNewContext("b = typeof b",obj); //undefined
vm.runInNewContext("global = typeof global",obj); //undefined
vm.runInNewContext("c = typeof c",obj); //undefined

console.log(obj);
// require("koa-bodyparser")
