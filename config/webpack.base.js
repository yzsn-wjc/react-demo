// webpack.base.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { pathResolve } = require("./tools");

module.exports = {
  entry: pathResolve("/src/main.jsx"),
  mode: "development",
  output: {
    path: pathResolve("dist"),
    filename: "js/[name].[contenthash:8].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 650 * 1024, // 小于650kb转base64 (正常情况下10kb左右下的会转成base64)
          },
        },
        generator: {
          filename: "images/[name].[contenthash:8].[ext]", // 文件输出目录和命名
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "media/[name].[contenthash:8].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "fonts/[name].[contenthash:8].[ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": pathResolve("src"),
      components: pathResolve("src/components"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: pathResolve("public/assets"), // 从哪个文件复制
          to: pathResolve("dist/static"), // 复制到哪个目录下
        },
      ],
    }),
  ],
};
