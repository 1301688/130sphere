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
- 基本的な表示方法は大きく分けて5つ
>- リテラル記法を利用する方法
> ①ディレクトリからファイルをimportして表示  
> ②staticディレクトリへのファイル保存して表示
>- GraphQLのquery結果を利用する方法(パラメーター)
> ③GraphQLによる画像の表示 
> ④Gatsby-imageプラグインを利用した画像の設定
> ⑤Gatsby-plugin-imageプラグインを利用した画像の設定
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
<!-- ここから下③、④はプラグインインストール後、実装してコードテストすること -->
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

export default function Home({ data }) {
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

④Gatsby-imageプラグインを利用した画像の設定
- Gatsbyには画像の最適化とパフォーマンス向上させるための重要なプラグインがある  
- プラグインを利用することで手間のかかる画像最適化の作業を自動化することが出来る
> 1. Gatsby-imageプラグインを利用するために下記プラグインをインストール
>- yarn add gatsby-transformer-sharp
>- yarn add gatsby-plugin-sharp
>- yarn add gatsby-image
> 2. gatsby-config.jsファイルに設定する
> 3. 設定完了後、gatsby-developコマンドを実行
> 4. GraphiQLにallimageSharpとimageSharpが追加されいることを確認
> 5. GraphiQLのqueryでimagesファイルに保存されているsample.svgの  
> 情報が取得できているか確認 ※queryの項目指定方法は多種多様
> 6. gatsby-imageを利用するためgatsby-imageをimportする
> 7. コンポーネントにqueryとJSXを記述して表示されることを確認
gatsby-config.jsの設定▼  
※gatsby-imageはgatsby-config.jsファイルで設定する必要はない
```
plugins: [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    }
  }
]
```
ページコンポーネントの場合▼
```
import React from "react"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
      <div>Hello isao!!</div>
      <Img fixed={data.testFixed.childImageSharp.fixed} alt="samplefixed" />
      <Img fluid={data.testFluid.childImageSharp.fluid} alt="samplefluid" />
  )
}

export default query = graphql`
  {
    sampleFixed: file(relativePath: {eq: "sample.svg"}) {
      childImageSHarp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sampleFluid: file(relativePath: {eq: "sample.svg"}) {
      childImageSHarp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
```
コンポーネントの場合▼
```
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      {
        sampleFixed: file(relativePath: {eq: "sample.svg"}) {
          childImageSHarp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sampleFluid: file(relativePath: {eq: "sample.svg"}) {
          childImageSHarp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
}
```
<!-- 上記queryは間違えているので、graphqlインストール時に実装テスト必要 -->
⑤Gatsby-plugin-imageプラグインを利用した画像の設定 
※これ詰まりそう。。。実装時まとめに変更　gatsby-imageより良いと思われる

https://typememo.jp/tech/gatsby-image-evolution-gatsby-plugin-image/

https://software.pitang1965.com/2021/03/25/migrating-from-gatsby-image-to-gatsby-plugin-image/

https://zenn.dev/kaito18/articles/1b7a813375ac69

インストール時に実装、理解が出来るようにする

#### faviconの作成方法
- favicon.icoファイルの作成方法は情報が少ないため簡単な方法を記述
>- gatsby-plugin-faviconsプラグインで作成する
>  SVGをファビコンに出来る=SVGをdrawioでつくって変換出来るので良い
>  おそらく他にも良い方法があるが、現在はこの方法で作成する
>- Webにあるいずれかのサイトで作成する
#### faviconを格納するディレクトリまたはファイル
- 表示させたいfavicon.icoデータをGatsbyプロジェクトで読み取り可能な場所に格納する
- faviconとはfaivariticonの略のよう
>- root/staticディレクトリ
>- gatsby-config.jsファイル
#### faviconを設定する
- 作成したfavicon.icoファイルをGatsbyプロジェクトで読み取り表示出来るように設定する
>- gatsby-plugin-manifestもしくはgatsby-plugin-react-helmetどちらがSEO必須か調べた結果 
>  catさんのconfig,jsを見て判断する && サイトを参考にする && bookを参考にする
答え　catも公式もhelmet

設定方法
①staticディレクトリに配置する
②gatsby-plugin-manifestのオプションに配置する
③gaysby-react-helmetのオプションに配置する

今回は①を実装する
理由は今後SVGを作成することは十分にあるから　でもdrawio１択で作成するとは限らない　まだ調べてないから
作成したSVGをicoに変換できるプラグインがあるから
チョット迷ってきた　このプラグインはこのためだけ　マニフェストは多分必須　やっぱりマニフェストで実装する
今回は②で実装する 
ちがう、これはモバイルに対しての問題解決法のため、ファビコンに特化していない
やっぱり①でやる

ファビコンまとめは別記事にする
プラグインまとめ記事作っとく　日々更新で

- root/staticにfavicon.icoファイルを置く
  →ここからは多分→ビルドした時にroot/publicにコピーされる→以降呼び出される
- gatsby-plugin-manifestで設定する
※ブラウザで一度作成されたファビコンは残り続けるので、明示的に削除する必要性がある
- catさんはstatic,manifest両方に設定しているが、favicon.icoのほうはあやしい
　→ブラウザのキャッシュから考えるがベストだが嵌りそうなのでつぎ

※後日
※マークダウン１つは後日			
- パラメタ系にして取る場合は常にデータが存在することを想定して			
- プログラムすることでエラーハンドリング


　

