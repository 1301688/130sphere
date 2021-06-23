---
title: "styled-components"
date: "2021-06-24"
updateDate: ""
type: ""
category: "css"
description: "styled-components"
emoji: "🎨"
topImage: ""
---
- styled-componentsの利点
```
1. 従来のCSSは命名規則が煩雑
　　従来のCSSではすべてのセレクターが同じ名前空間に存在するため
   サイト内の他の場所で使用されているCSSセレクターを上書きしないように
   注意する必要があるので命名規則が複雑になっていた
2. スコープ管理が楽
　　CSS-in-JSを使用するとCSSセレクターがコンポーネント内に  
   自動的にスコープされるためCSSの問題をすべて回避できる
3. コンポーネント単位の編集でミスに気づきやすい
　　スタイルはコンポーネントと密接に結びついている
   これによりCSSがどこでどのように使用されているかについて  
   混乱が生じないためコンポーネントのCSS編集が遥かにしやすくなる
4. レスポンス改善につながる
   レンダリングされたコンポーネントだけのスタイルを取り込むことで使用していない  
   スタイルをインポートする必要がなくなる　従来のCSSファイルだとすべてのスタイルを
   取り込む必要があったがstyled-componentsではその必要がない
```
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

#### styled-componentsで引数を使う
- propsに引数が渡されるのでテンプレートリテラルでその属性を使う
```
import styled from "styled-components"

export default function Home() {
  //タイトル
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    //引数に色が渡されれば設定される三項演算子
    color: ${props => props.color ? props.color : "green"};
  `;
  return (
      <Title color="red">Hello!</Title>     [赤]
      <Title color="#ffffff">World</Title>  [黒]
      <Title>styled-components</Title>      [緑]
  );
}
```
#### styled-componentsでスタイルの拡張
- ベースとなるコンポーネントを指定してスタイルを拡張できる
- styledメゾットの引数を渡してテンプレートリテラルに上書きするスタイルを追記する
```
import styled from "styled-components"

export default function Home() {
  //ベースのタイトル
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: green;
  `;
   //青色タイトル && 太字
  const BlueTitle = styled(Title)`
    color: blue;
    font-weight: bold;                
  `;
  //赤色タイトル && 下線
  const RedTitle = styled(Title)`
    color: red;
    text-decoration: underline;        
  `;

  return (
      <Title>Hello!</Title>
      <BlueTitle>Hello!</Title>
      <RedTitle>Hello!</Title>
  );
}
```
##### 参考サイト　
- https://qiita.com/taneba/items/55e04cb789b0b0dd7603
- https://zenn.dev/kupuma_ru21/articles/66fd3499c7f3ef
- https://zenn.dev/syu/articles/0f92abf7f0b5c5
- https://www.fundely.co.jp/blog/tech/2020/09/16/180026/
- https://blog.cybozu.io/entry/2020/06/25/105457
