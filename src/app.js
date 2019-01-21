// エントリーポイントとなるメインのJavaScriptです。
// 猫の一覧を読み込んでログ出力します。

var cats = require('json-loader!./cats.json');
console.log(cats);