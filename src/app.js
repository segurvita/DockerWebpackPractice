// エントリーポイントとなるメインのJavaScriptです。
// 猫の一覧を読み込んでログ出力します。

var cats = require('json-loader!yaml-loader!./cats.yml');
console.log(cats);