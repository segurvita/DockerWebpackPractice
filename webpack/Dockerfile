# nodeのイメージをベースとする
FROM node:7.1.0

# 作業ディレクトリ
WORKDIR /my_webpack

# 設定ファイルのコピー
COPY ./package.json package.json

# Node.js依存ライブラリを導入
RUN npm init -y
RUN npm install --save-dev webpack@2.1.0-beta.26
RUN npm install --save-dev json-loader
RUN npm install --save-dev yaml-loader

# app.jsをwebpackでビルドし、bundle.jsを出力
CMD ["npm", "run", "build"]
