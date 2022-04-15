//发布订阅模式 核心就是把多个方法先暂存起来，最后一次执行(发布订阅之间是没有依赖关系的)
const fs = require("fs");
let events = {
  _events: [],
  on(fn) {
    this._events.push(fn);
  },
  emit(data) {
    this._events.forEach((fn) => fn(data));
  },
};
fs.readFile("./a.txt", "UTF8", function (err, data) {
  events.emit(data);
});
fs.readFile("./b.txt", "UTF8", function (err, data) {
  events.emit(data);
});
events.on(() => {
  console.log("每读取一次 就触发一次");
});
let arr = [];
events.on((data) => {
  arr.push(JSON.stringify(data));
});
events.on((data) => {
  if (arr.length === 2) {
    // 最终结果还是计数器
    console.log("读取完毕", arr);
  }
});
