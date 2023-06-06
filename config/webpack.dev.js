const { merge } = require("webpack-merge");

const { pathResolve } = require("./tools");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  devServer: {
    hot: true,
    port: 9999,
    static: pathResolve("dist"),
  },
});
