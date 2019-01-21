var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入力ファイル設定
  entry: "./src/app.js",
  // 出力ファイル設定
  output: {
    path: "dist",
    filename: "./bundle.js"
  },
  // モジュールの設定
  module: {
    // ソースコードでrequireする時のローダー
    loaders: [
      {
        test: /\.yml$/,
        loaders: ["json-loader", "yaml-loader"]
      }
    ]
  },
  // プラグイン
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: "Sample Page"
    })
  ],
  // ソースマップ
  devtool: "#cheap-module-eval-source-map"
};
