const { merge } = require("webpack-merge");

const { pathResolve } = require("./tools");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  devServer: {
    hot: true,
    port: 9999,
    static: {
      directory: pathResolve("dist"),
      publicPath: "/",
    },
    historyApiFallback: true, // 刷新页面404问题
  },
});
