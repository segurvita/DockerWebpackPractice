var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Webpack 4 から追加
  mode: 'production',
  // 入力ファイル設定
  entry: "./src/app.js",
  // 出力ファイル設定
  output: {
    path: "/my_webpack/dist",
    filename: "./bundle.js"
  },
  // モジュールの設定
  module: {
    // ソースコードでrequireする時のローダー
    rules: [
      {
        test: /\.yml$/,
        loaders: ["json-loader", "yaml-loader"]
      }
    ]
  },
  // プラグイン
  plugins: [
    new HtmlWebpackPlugin({
      title: "Sample Page"
    })
  ],
  // ソースマップ
  devtool: "#cheap-module-eval-source-map"
};
