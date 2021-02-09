IoTプロトタイピングワークショップ「クラウドアプリケーション編」| サンプルプログラム
===============================================================================

What's This?
-------------------------------------------------------------------------------

IoTプロトタイピングワークショップ「クラウドアプリケーション編」で使用したサンプルプログラムです。

### 実施実績

- 2019/MM/DD: IoT・ロボットビジネス創出プログラム「[AIDOR ACCELERATION](https://teqs.jp/acceleration)」第1ターム 基礎知識講座 第3回
- 2019/10/16: IoT・ロボットビジネス創出プログラム「[AIDOR ACCELERATION](https://teqs.jp/acceleration)」第2ターム 基礎知識講座 第3回


Getting Started
-------------------------------------------------------------------------------

1. [Node.js](https://nodejs.org/ja/)をダウンロードし、インストーラの指示に従ってセットアップを行います
    - 確実に動作を確認できているバージョンは[v8.15.0](https://nodejs.org/download/release/v8.15.0/)です
2. このリポジトリを[ダウンロード](https://github.com/Guvalif/iot-02_v2/archive/master.zip)します
3. ↑のファイルを解凍し、フォルダ内 ( `package.json` がある場所) で黒い画面を立ち上げます：
    - **Windowsの場合** ⇒ コマンドプロンプト
    - **Macの場合** ⇒ ターミナル
4. `npm ci` というコマンドを入力し、エンターキーを押します
    - インターネットの環境にもよりますが、120秒程度で必要なファイルのダウンロードが終わります
5. 以下のコマンドをそれぞれ入力することで、ハンズオンを再現できます：
    - `node uploader.js` : micro:bitからの出力を、FirebaseのRealtime Databaseへアップロードする
    - `npm run login` : Firebase Hostingを使用するためのログイン手続き
    - `npm run logout` : Firebaseからのログアウト  
      (1つのPCで1つのGoogleアカウントへしかログインできないため、切り替えが必要な場合はログアウトをする)
    - `npm run deploy` : Firebase HostingへのWebアプリのアップロード


Directory & File Structure
-------------------------------------------------------------------------------

- `/public/` : Firebase HostingにアップロードしたいHTML/CSS/JavaScriptを収める
    - `app.js` : Vue.jsによるModelが書かれている
    - `index.html` : Vue.jsによるViewが書かれている
- `.firebaserc` : Firebase Hostingの設定ファイル
- `logger.py` : micro:bitに書き込むJSON出力プログラム
- `uploader.js` : micro:bitからの出力をFirebaseにアップロードするプログラム


Copyright (c) 2019,
-------------------------------------------------------------------------------

- [PLEN Project Company Inc.](https://plen.jp)
- [Kazuyuki TAKASE](https://github.com/Guvalif)

This software is released under [the MIT License](http://opensource.org/licenses/mit-license.php).
