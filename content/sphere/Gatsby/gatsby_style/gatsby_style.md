---
title: "④Gatsbyのスタイル"
date: "2021-06-23"
updateDate: ""
type: ""
category: "gatsby"
description: "④Gatsbyのスタイル"
emoji: "🍃"
topImage: ""
---
#### 使用する技術
- styled-components
- 詳細は別記事で >>
#### styled-componentsのインストールと設定
- Macの場合
```
▼ ターミナルをひらく
$ yarn add styled-components
$ yarn add gatsby-plugin-styled-components
$ yarn add babel-plugin-styled-components
```
- gatsby-config.jsに設定する
```
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}
```
#### styled-componentsの基本的な使い方
>- ユースケース:いつでも
- src/pagesディレクトリでstyled-componentsをインポートする
- 基本文法:HTMLタグ付きのテンプレートリテラルを使って書く
- 外部インポートタグ、拡張、propsなどその他応用は別記事で理解 >>
```
import styled from "styled-components"

export default function Home() {
  //コンテナ
  const Container = styled.div`
  margin: auto;
  padding: 0;
  background-color: purple;
  width: 800px;
  height: 100%;
  color: green;
`
  return (
    <Container>
      <div>Hello isao!!</div>
    </Container>
}
```
#### styled-componentsでクラスを使う
>- ユースケース:`gatsbyAPI(Linkなど)`にスタイルを適応させたい時

1. コンポーネント毎のクラス名で適応させる場合..書きやすい
  - 基本的な使い方に入れ子で書く
```
import styled from "styled-components"

const Container = styled.div`
  margin: auto;
  padding: 0;
  background-color: purple;
  width: 800px;
  height: 100%;
  color: green;
  // クラス名でスタイル宣言
  .on-class {
    color: blue;　
  }
  // タグにもスタイル宣言可能
  a {
    font-size: 30px;
  // 入れ子で色々できる
    &:hover {
      color: pink;
    }
  }
`

export default function Home() {
  return (
    <Container>
      <div>Hello isao!!</div>                                 [基本適応]
      <div className="on-class">Hello isao!!</div>            [クラス名で適応]
      <Link to="/jikosyoukai" style={{ display: "block" }}>   [タグで適応]
        to JikoSyoukai
      </Link>
    </Container>
  )
}
```
2. 安定したクラス名で適応させる場合..Gatsby公式はこちら
  - stylesディレクトリにCSSファイルを作成
  - CSSファイルにクラス名とスタイルを書く
  - 表示ページsrc/pagesディレクトリ内のファイルで    
    作ったCSSファイルをインポートして適応
```
// styles/class.cssファイル
.container {
  color: red;
}
```
```
// src/pages/index.jsファイル
import styled from "styled-components"
import "../../styles/class.css"

const Container = styled.div`
  margin: auto;
  padding: 0;
  background-color: purple;
  width: 800px;
  height: 100%;
  color: green;
`
export default function Home() {
  return (
    <Container>
      <div>Hello isao!!</div>                          [基本のスタイル:緑文字が適応]
      <div className={`container`}>Hello isao!!</div>  [class.cssファイルの.containerのスタイル:赤文字が適応]
    </Container>
  )
}

```
#### グローバルなスタイリング
>- ユースケース1:改修が簡単、汎用的なスタイルを適応させたいとき
>  ユースケース2:複数のページにスタイルを適応させたいとき
- styled-componentsAPIのcreateGlobalStyleを使用して設定する
- Layoutコンポーネントを作成する場合に推奨


1. Layoutコンポーネントで適応..Gatsby公式
レイアウト作成時にまとめ
2. https://www.gatsbyjs.com/plugins/gatsby-plugin-global-styles/
- styled-componentsではない通常のCSSでグローバルなスタイルを適応させるケース
- themeを使用しているので、基本的な考え方を参考にして理解する