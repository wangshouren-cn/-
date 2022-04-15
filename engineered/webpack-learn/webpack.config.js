const path = require("path");
const MiniCssPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssPlugin.loader, "css-loader","postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssPlugin({
      filename: "[name]-[contenthash:8].css",
      chunkFilename: "[id].css", //异步代码提取的css文件名
    }),
  ],
};
