---
title: "⑪Gatsbyのシンタックスハイライト"
date: "2021-06-24"
updateDate: ""
type: ""
category: "gatsby"
description: "⑪Gatsbyのシンタックスハイライト"
emoji: "🍃"
topImage: ""
---
>- ユースケース:記事内のコードにシンタックスハイライトを効かせたいとき
- catknowsはjsファイルにしてclassを適応させている→間違い、シンタックスハイライトだった			
- yarn add gatsby-transformer-remark gatsby-remark-prismjs prismjsのプラグインを使って
- gatsby-browser.jsにテーマを宣言
- 文法に従い、別ファイルでスタイル適応
- グローバルなファイルにインポートして、適応できれば完了			