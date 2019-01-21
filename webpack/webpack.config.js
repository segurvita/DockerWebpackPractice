module.exports = {
  // 入力ファイル設定
  entry: './src/app.js',
  // 出力ファイル設定
  output: {
    path: 'dist',
    filename: './bundle.js'
  },
  // モジュールの設定
  module: {
    // ソースコードでrequireする時のローダー
    loaders: [
      {
        test: /\.yml$/,
        loader: 'json-loader!yaml-loader'
      }
    ]
  }
};