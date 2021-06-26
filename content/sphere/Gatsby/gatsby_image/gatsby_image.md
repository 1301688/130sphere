---
title: "⑤Gatsbyの画像とファビコン(守)"
date: "2021-06-23"
updateDate: ""
type: ""
category: "gatsby"
description: "⑤Gatsbyの画像とファビコン（守）"
emoji: "🍃"
topImage: ""
---
#### 画像を格納するディレクトリ
- 表示させたい画像データをGatsbyプロジェクトで読み取り可能な場所に格納する
>- root/src/imagesディレクトリ
>- root/staticディレクトリ
>- metaファイル系にベタ書き ※後日

※は後日まとめ
#### 画像が表示されるディレクトリ/ファイル
- 最終的に表示されるページを下記に記述して直感的にする
>- アプリケーションのメーンページ	
>- 記事ページ内のアイキャッチ	
>- 記事カードのアイキャッチ		
>- OGP（metaData）※後日SEOの時		
>- 場所によって設定方法が違うことに注意する		
#### 画像の表示方法
- 基本的な表示方法は大きく分けて4つ
>- リテラル記法を利用する方法
> ①ディレクトリからファイルをimportして表示  
> ②staticディレクトリへのファイル保存して表示
>- GraphQLのquery結果を利用する方法(パラメーター)
> ③GraphQLによる画像の表示 
> ④Gatsby-pluginを利用した画像の設定

#### 画像の表示方法｜リテラル記法系
①ディレクトリからファイルをimportして表示▼
> 1. root/src/imagesに画像ファイルを置く
> 2. root/src/pages/index.jsで上記ファイルをimportする
> 3. importしたファイルをJSX記法で記述する
```
import React from "react"
import Test from "../images/sample.svg"

export default function Home() {
  return (
      <div>Hello isao!!</div>
      <img src={Test} alt="test" />
  )
}

```
②staticディレクトリへのファイル保存して表示▼
> 1. root/staticに画像ファイルを置く
> 2. 表示したいpageにJSX記法で記述する  
> staticディレクトリに画像ファイルを保存すると  
> root/publicディレクトリに画像ファイルが自動でコピーされる  
> ※Gatsbyでビルド実行時生成される cleanで削除される  
> JSX記述する時staticディレクトリに画像保存したので  
> static/staticTest.svgとsrcに指定するのではなく  
> publicディレクトリに保存されているstaticTest.svgと  
> 指定するだけで画像表示される
```
import React from "react"

export default function Home() {
  return (
    
      <div>Hello isao!!</div>
      <img src="/staticTest.svg" alt="test" />
  )
}

```
#### 画像の表示方法｜GraphQL:パラメーター記法系
③GraphQLによる画像の表示
> 1. gatsby-source-filesystemをインストールする  
> 2. GraphiQLでqueryを実行してローカルファイルの情報を取得  
> 3. 画像ファイルもローカルファイルの一種なのでGraphiQLの  
> queryを実行するとimagesディレクトリに保存したファイル情報を  
> 取得することができる    
> ※GraphiQLの結果から確認したpublicURLを直接srcに指定して表示することもできるが  
> GraphQLのqueryの実行結果をそのまま利用することもできる...殆どはこっち   
> ※GraphiQL(グラフィクル):GraphQL APIの使いやすいGUIクライアント、IDE  
> ※GraphQL(グラフQL):GraphQL APIそのもの  
ページコンポーネントの場合▼
```
import React from "react"
import { graphql } from "gatsby"

export default function Home({ datan }) {
  return (
      <div>Hello isao!!</div>
      <img src={data.file.publicURL} alt="test" />
  )
}

export default query = graphql`
  {
    file(name: {eq: "test"}) {
      publicURL
    }
  }
`
```
コンポーネントの場合▼
```
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      {
        file(name: { eq: "test" }) {
          publicURL
        }
      }
    `
  )
}
```



④Gatsby-pluginを利用した画像の設定
- ※マークダウン１つは後日
- ベタ書きする(①、③)か、パラメタにしてGraphQLで取る（②、④）か			
- パラメタにして取る場合は常にデータが存在することを想定して			
- プログラムすることでエラーハンドリング
後日※GraphQLによる画像の取得
偽日※Gatsby-image,Gatsby-plugin-imageプラグインを利用した画像設定
#### faviconを格納するディレクトリまたはファイル
- 表示させたいfavicon.icoデータをGatsbyプロジェクトで読み取り可能な場所に格納する
- faviconとはfaivariticonの略のよう
>- root/staticディレクトリ
>- gatsby-config.jsファイル
#### faviconの作成方法
- favicon.icoファイルの作成方法は情報が少ないため簡単な方法を記述
>- gatsby-plugin-faviconsプラグインで作成する
>  SVGをファビコンに出来る=SVGをdrawioでつくって変換出来るので良い
>  おそらく他にも良い方法があるが、現在はこの方法で作成する
>- Webにあるいずれかのサイトで作成する
#### faviconを設定する
- 作成したfavicon.icoファイルをGatsbyプロジェクトで読み取り表示出来るように設定する
>- gatsby-plugin-manifestもしくはgatsby-plugin-react-helmetどちらがSEO必須か調べた結果
>  catさんのconfig,jsを見て判断する && サイトを参考にする && bookを参考にする

- root/staticにfavicon.icoファイルを置く
  →ここからは多分→ビルドした時にroot/publicにコピーされる→以降呼び出される
- gatsby-plugin-manifestで設定する
※ブラウザで一度作成されたファビコンは残り続けるので、明示的に削除する必要性がある
- catさんはstatic,manifest両方に設定しているが、favicon.icoのほうはあやしい
　→ブラウザのキャッシュから考えるがベストだが嵌りそうなのでつぎ


　

