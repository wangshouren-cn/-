const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = new SpeedMeasurePlugin().wrap({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: "./txt-loader.js",
          options: {
            key: "value",
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "none",
  optimization: {
    usedExports: true,
  },
});
