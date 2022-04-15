const fs = require("fs");

//src是上一个loader处理后的结果，如果这个loader是第一个处理该文件的loader，那么src就是文件内容
//如果这个loader是处理一个文件中的最后一个loader，那么返回的内容必须是js能够执行的字符串（相当于把源文件替换为该字符串然后webpack再进行打包）
//this.query是传入的参数
//同步模式下使用this.callback(null|error,result:String|Buffer,source map,自定义参数value:any)  this.async()返回this.callback    告诉loader-runner 这个loader将会异步回调
module.exports = function (src, ...args) {
  console.log("----------------------");
  console.log("this.query", this.query);
  console.log("args", args);
  console.log("----------------------");
  return `module.exports = "${src}"`;
};
