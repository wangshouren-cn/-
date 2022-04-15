const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.resolve(__dirname, "./a.js"), {
  highWaterMark: 4, // 字节为单位
});

rs.on("data", function (chunk) {
  console.log(chunk);
});
