const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", //指定模式
  //entry可以是个数组，
  entry: "./src/index.js", //入口 等价于写 {main:"./src/index.js"}
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  }, //出口
  module: {
    rules: [{ test: /\.txt$/, use: ["raw-loader"] }],
  },
  plugins: [
    //这个插件会向输出目录创建index.html文件，并且自动插入脚本
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename:"index.html"
    })
  ]
};
