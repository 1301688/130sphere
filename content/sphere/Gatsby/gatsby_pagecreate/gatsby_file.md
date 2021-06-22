---
title: "③Gatsbyのページ作成"
date: "2021-6-22"
updateDate: ""
type: ""
category: "gatsby"
description: "Gatsbyのページ作成"
emoji: "🍃"
topImage: ""
---

#### Gatsbyのプロジェクト構成
- プロジェクト構成
```
インストールディレクトリ
    |-- .cache ............[自動で生成されるキャッシュファイルを格納するディレクトリ]
    |-- node_modules.......[npmを用いてインストールしたパッケージ]
    |-- public.............[事前にビルドし作成されたHTMLが格納される　このディレクトリ内のファイルは自動で生成される]
    |-- src................[ソースコードの置き場所　開発時にここに書いていくことになる]
    |    |--- pages........[ページを構成するソースコードの置き場所　ここに書かれたファイルがサイト上のページと紐付く]
    |-- static.............[画像やfaviconの置き場所]
    |-- gatsby-browser.js..[rootへの設定やglobalに読み込ませたい設定を書く]
    |-- gatsby-config.js...[Gatsbyの設定ファイル　サイトのmetaデータを定義したり利用するプラグインを設定する]
    |-- gatsby-node.js.....[フックさせたいAPIで関数をかいて設定しておけばビルド時に実行される]
```
<!-- ページ自動生成の理解、GatsbyAPIの理解を学習時にそれぞれのディレクトリに設定することをまとめる -->
- Gatsbyの開発において最低限知っておくべき箇所の説明

- Gatsby
  - project 上のファイルは node で管理
- GraphQL
  - plugin-install で node にアクセスして色々なデータが取得できる
  - gatsby-node.js で取得したいデータを生成することもできる
- gatsby-node.js
  - node のロジックでサイト構成が決まる
  - ロジックを記述することで意とした構築が可能
  - slug とは URL に追加する一意の識別部分　パスの追加
- gatsby-config.js
  - plugin 記述
  - metadata 記述
- templates
  - 自動生成ページ
  - gatsby-node.js とワンセットと考える
  - gatsby-node.js のロジックを介して生成される
  - 実態がないので捉えにくい
    - sphere-template.js = 記事一覧ページとそのページのページネーションの雛形
    - spherecat-template.js = カテゴリ毎の一覧ページの雛形
    - spherepost-template.js = 記事単体のページの雛形
- peges
  - 固定表示ページ
  - 静的ページ
  - 動的ページを加えることもできる
- component
  - 表示パーツ
  - 単体で動くコンポーネントと props,node を継承して動くコンポーネントがある
    - props,node を取得して動くコンポーネントでかつ一意のページのように 1 対 1 で props,node のデータを渡さないと行けない場合はメゾットを利用した記述が無いと大抵の場合エラーになる
- Link
  - リテラル記述か graphql で動的に設定
  - 各ページで slug を node.js で作成
#### Gatsbyのページ編集
- `src/pages`ディレクトリのソースコードを編集することで  
  プロジェクトページの編集が出来る
- Reactの基本文法で編集 
<!-- ※React基礎の記事へリンクできたらベスト -->
>- JSXの文法で必ず書く
>- HTMLコードは最上位要素で必ずラップする
>- HTMLコードが複数行になる場合はHTMLを括弧内に入れる
>- 要素は必ず閉じる
>- 要素のclassはclassNameと必ず書く
>- 要素のstyle属性は2重波括弧の中に必ず書く
>- 式を扱う場合はJSXの世界では波括弧内に必ず書く

```
// src/pages/index.js
import React from "react"

export default function Home() {
  return <div>Hello from Gatsby!</div>
}
```
#### Gatsbyのページ追加
- `src/pages`ディレクトリにソースコードを追加することで  
  プロジェクトページの追加が出来る
- Gatsbyの`<Link>タグ`を使うことで追加したページへの  
  遷移を手軽に実装できる
```
// src/pages/jikosyoukai.js
import React from "react"
import { Link } from "gatsby"

export default function JikoSyoukai() {
  return (
    <div>
      <div>JikoSyoukai</div>
      <Link to="/">to Home</Link>
    </div>
  )
}
```

>- Gatsbyでは`src/pages`ディレクトリにファイルを作成すると   
>  `local:host:8000/ファイル名`のURLで新しいページが作成される
>- ただし`index.js`のみ例外で、ファイル名ではなく  
>  `local:host:8000/`となる





