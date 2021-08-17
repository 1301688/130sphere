---
title: "Gatsbyの画像"
date: "2021-06-23"
updateDate: ""
type: ""
category: "gatsby"
description: "自分の学習ノート_Gatsby"
emoji: "🍃"
topImage: ""
---

#### 今回の目的
- GatsbyのAppで画像を表示する

#### 目的達成に向けての問題
- 画像表示方法が理解できていない

#### 問題解決に対しての課題
- 基本情報収集

#### 基本情報(使い方や概念など)　順序立てて書く
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



※後日
※マークダウンに画像表示したいケースは後日まとめる
→Markdownへ画像表示する場合の結論
  → gatsby-remark-images (マークダウン上に画像表示するプラグイン)		
  → gatsby-plugin-sharp (画像のリサイズ , 画像の最適化)		
  → gatsby-remark-relative-images (mdファイルからの相対パスで画像ファイルを指定できる)	
    ※Mdxをベースにする場合、必要ないプラグイン　逆にerror発生する
  → configへ上記pluginを記載する時、書く場所に注意
    →	mdxファイル内で使用する配下のプラグイン gatsby-remark-imagesや
    → プロジェクト全体に対してのpluginみたいな考え方
- パラメタ系にして取る場合は常にデータが存在することを想定して			
- プログラムすることでエラーハンドリング


　

