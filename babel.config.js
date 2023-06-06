module.exports = {
  presets: [
    // 设置预设
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // core-js的使用版本
      },
    ],
    "@babel/preset-react", // 解析
  ],
};
