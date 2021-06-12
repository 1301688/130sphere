---
title: "Gatsby_File"
date: "2021-6-13"
updateDate: ""
type: ""
category: "gatsby"
description: "Gatsbyのfile構成"
emoji: "🍃"
topImage: ""
---

## ファイル構成

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


