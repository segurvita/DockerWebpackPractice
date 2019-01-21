# nodeのイメージをベースとする
FROM node:7.1.0

# 作業ディレクトリ
WORKDIR /my_webpack

# 設定ファイルのコピー
COPY ./package.json package.json

# Node.js依存ライブラリを導入
RUN npm install

# app.jsをwebpackでビルドし、bundle.jsを出力
CMD ["node", "node_modules/.bin/webpack", "app/app.js", "app/bundle.js"]
