---
title: "Gatsbyのfavicon"
date: "2021-06-29"
updateDate: ""
type: ""
category: "javascript, css, react, node, gatsby.typescript, all"
description: "Gatsbyのfavicon"
emoji: "🍃"
topImage: ""
---

#### 記事構成

- faviconの準備
- faviconの設定

#### 目的

> gatsby-starterではじめるプロジェクトはfaviconの  
> 基本設定がgatsbyの状態なのでこれを変更したい

#### 問題

1. 表示したいfaviconの作り方が理解できていない
2. 作ったfaviconをどのように設定すれば良いのか理解できていない
#### 解決策

1. 表示したいfaviconを準備する
2. 表示したいfaviconを設定する

#### 1.表示したいfaviconの準備
- faviconの準備=favicon.icoファイルの準備
- favicon.icoファイルを作成する方法▼
①gatsby-plugin-faviconsプラグインで作成する  
> SVGをfaviconに変換できるプラグイン　詳細はこっちで>> #gatsby_plugin記事へのリンクまたは後記  
> vscode内のdrawioでSVGをつくって変換出来る方法があることを考えると🙆‍♂️ 
②Webに落ちているサイトで作成する
> すでに持っている素材をfavicon.icoファイルに変換出来る様子
③SVGファイルをGatsbyプロジェクト内でfaviconとして扱えるようにする
> pluginで実現可能 詳細はこっちで>> #gatsby_manifest記事へのリンクまたは後記

#### 2.表示したいfaviconを設定
- 設定方法は以下3つ▼
①root/staticディレクトリに設定する
②gatsby-plugin-manifestのオプションに設定する
③react-helmetに設定する

①root/staticディレクトリに設定する
- 初期設定のroot/static/favicon.icoファイルを  
  使用したいfavicon.icoファイルに置き換える 
②gatsby-plugin-manifestのオプションに設定する
- 応用方法 詳細はgatsby-plugin-manifest記事へ>>リンクまたは後記
- optionのiconに設定するだけ(favicon.icoファイルでなくても良い)
③react-helmetのオプションに設定する
- 応用方法 あまり使用されていない様子
- <header></header>に設定するだけ(単にHTMLで出す)
#### 上記設定が適応される理由　原理
- root/staticにfavicon.icoファイルを置く  
  →favicon.icoがサイトルートに置かれるためHTMLで指定しなくても  
  ブラウザがfaviconとして認識し表示してくれるから

- gatsby-plugin-manifestで設定する  
  →一旦ビルドしないとManifestは作成されないのでビルドする→Application/Manifestで中身を確認    
  ※ビルドして本番環境に設置されたiconはブラウザローカルでキャッシュされる(PWAだから&&本番環境のみ) 
  →一度作成されたファビコンは残り続けるので、更新したい時は明示的に削除する必要性がある  
  ※削除方法→/Users/ユーザー名/Library/Application Support/Google/Chrome/Defaultにある  
  faviconsというファイルを削除→Chromeを再起動すると新しいfaviconが読み込まれる

#### まとめ
- ファビコンを自分好みのものにできるとプロジェクト自体に愛着が湧く
- 自分で意図したコーディング、設定ができていることを実感できる
- 絵文字を設定できたりもすることが分かった　参考サイト>>cat参考 Zenn




