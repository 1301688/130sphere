---
title: "②Gatsbyをはじめる"
date: "2021-6-14"
updateDate: "2021-6-18"
type: ""
category: "gatsby"
description: "Gatsbyをはじめる"
emoji: "🍃"
topImage: ""
---
## Gatsbyをはじめるときに必要なスキル
▼ 必須スキル
- HTML,CSS,JavaScript,Reactの基本文法の理解
- Git,GitHubでのバージョン管理についての理解
▼ 推奨スキル
- Webサイトが動く仕組みの理解
- 一般的なWebサイトを公開するまでの手順の理解
## Gatsbyをはじめるときに必要な開発環境
- Node.js
- Git
- Gatsby.js

#### Node.jsのインストール
- Macの場合
>- HomebrewとXcodeのインストールが必要（nvmでも管理できる）
> 1. ターミナルをひらく
> 2. [Homebrew](https://brew.sh/index_ja)をインストール
> 3. `xcode-select --install`をターミナルで実行,Xcodeをインストール
> 4. `brew install node`をターミナルで実行,Node.jsをインストール
#### Gitのインストール
- Macの場合
```
▼ ターミナルをひらく
$ brew install git
▼ 名前、メールアドレスの設定
$ git config --global user.name "Isao Kobayashi"
$ git config --global user.email "isao@gmail.com"
```
#### Gatsb.jsのインストール
- GatsbyのコマンドをあつかうためのCLI(コマンドラインインターフェース)ツールをインストール
```
$ npm install -g gatsby-cli
```
または
```
$ yarn global add gatsby-cli
```


## Gatsbyのスターターの調べかた
#### スターターってなに？
  - すでにGatsbyで作られているプロジェクトのこと
  - 良い感じのイメージをGatsby公式で用意してくれている
  - 自分の好みに合わせて選択して使用できる
#### スターターについて調べた参考サイト
  - Gatsby公式  https://www.gatsbyjs.com/starters/?
  - もっと詳しく　https://dvg.179.jp/201803-gatsby-starter/
#### 調べた結果
  - スターターがありすぎて全て網羅するのは不可能
#### 選び方
  - 目的に対して一番最適なスターターを選定すること
  
#### 探し方
  - こちらを参照　https://zenn.dev/tyaahan/articles/cf7aec1a6d90c8
#### 結論　
  - Gatsby公式で用意されているスターターでれば問題なし
  - 後からカスタマイズできるので、問題なし


