---
title: "⑤Gatsbyの画像(守)"
date: "2021-06-23"
updateDate: ""
type: ""
category: "gatsby"
description: "⑤Gatsbyの画像（守）"
emoji: "🍃"
topImage: ""
---
#### 画像の置き場所
- 1. root/src/imagesディレクトリ　
- 2. root/staticディレクトリ
- 3. metaファイル系にベタ書き ※後日

※守では1,2のみまとめ
#### 画像の表示場所
- メーンページ内		
- 記事ページ内		
- 記事カード		
- OGP（metaData）		
- 場所によって設定方法が違うことに注意する		
#### 画像の表示方法
- ４つ　※うちGraohQLが絡む②と④は後日
- ※マークダウン１つは後日
- ベタ書きする(①、③)か、パラメタにしてGraphQLで取る（②、④）か			
- パラメタにして取る場合は常にデータが存在することを想定して			
- プログラムすることでエラーハンドリング
後日※GraphQLによる画像の取得
偽日※Gatsby-image,Gatsby-plugin-imageプラグインを利用した画像設定



#### faviconを設定する
- root/staticにfavicon.icoファイルを置く
  →ここからは多分→ビルドした時にroot/publicにコピーされる→以降呼び出される
- gatsby-plugin-manifestで設定する
※ブラウザで一度作成されたファビコンは残り続けるので、明示的に削除する必要性がある
- catさんはstatic,manifest両方に設定しているが、favicon.icoのほうはあやしい
　→ブラウザのキャッシュから考えるがベストだが嵌りそうなのでつぎ

#### faviconの作成方法
- gatsby-plugin-faviconsで作る
　→SVGをファビコンに出来る= SVGをdrawioでつくって変換出来るがベストかも
- どっかのサイトで作る


