const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssPlugin(), new BundleAnalyzerPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()],
  },
});
