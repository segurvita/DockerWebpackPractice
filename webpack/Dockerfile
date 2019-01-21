# nodeのイメージをベースとする
FROM node:10.15.0

# 作業ディレクトリ
WORKDIR /my_webpack

# 設定ファイルのコピー
COPY ./package.json package.json

# Node.js依存ライブラリを導入
RUN npm init -y
RUN npm install

# ライブラリのバージョンを確認
RUN npm list --depth=0

# app.jsをwebpackでビルドし、bundle.jsを出力
CMD ["npm", "run", "watch"]
