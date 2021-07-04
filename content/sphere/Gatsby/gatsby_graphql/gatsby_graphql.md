---
title: "GatsbyのGraphQL"
date: "2021-06-30"
updateDate: ""
type: ""
category: "gatsby"
description: "自分の学習ノート_Gatsby"
emoji: "🍃"
topImage: ""
---
#### 今回の目的
- GraphQLを操り、思い通りデータを表示する

#### 目的達成に向けての問題
- GatsbyでのGraphQL基本が理解できていない
- Gatsbyプロジェクトでの扱いかたが理解できていない

#### 問題解決に向けての課題
- 基本情報収集
- GraphQLはなぜ誕生したかを調べる
- GraphQLで出来ること、メリット、デメリットを調べる
- Gatsbyプロジェクトで扱うため、Gatsby公式ドキュメントを調べる
- Gatsbyプロジェクトで使うGraphQLのパターンを調べる
#### 基本情報(使い方や概念など)　順序立てて書く
- GraphQLとは
Gatsbyで構築する際には、GraphQLというクエリ言語を使ってデータにアクセスします。GraphQLでは、データのニーズを宣言的に表現することができます。これを行うのがクエリで、クエリは必要なデータの表現です。
クエリのシグネチャが、返されたJSONのシグネチャと正確に一致していることに注目してください。これが可能なのは、GraphQLでは、利用可能なデータの表現であるスキーマに対してクエリを実行するからです。GatsbyはGraphiQLというツールを使って、データを整理し、発見可能な状態にしてくれます。
GraphiQLは、以下のようなことを可能にするUIです。
1.ブラウザ上でデータに対するクエリを実行できます。
2.データタイプエクスプローラーでデータの構造を調べることができます。
GraphQLについてもっと知りたい方は、GatsbyがなぜGraphQLを使っているのか、また、GraphQLを使ったデータのクエリーに関する概念的なガイドをご覧になってください。

#### 施行開始
- 基本クエリ
- まずは基本的なこととして、gatsby-config.jsのsiteMetadataからサイトのタイトルを取得できる
- 長いクエリ
- ギャツビーは、コンテンツをノードの集合体として構成しており、ノードはエッジで互いに接続されている
- Gatsbyバージョン2.2.0以降を使用している場合、クエリからエッジとノードを削除し、ノードで置き換えることができます。クエリはそのまま動作し、返されるオブジェクトはノード構造を反映したものになります。
 pageQueryとstaticQuery
- てざなりさん基本がカンタンに分かりやすい
- https://dezanari.com/gatsby-graphql-use-static-query/
- なんか違う気もする、公式と見比べて学習すること
- pageQuery,StaticQuery,useStaticQueryの違いと使い方がわかれば完了
- きちんと理解するためにはReact Hookを理解すると良い
- 公式が詳細まで解説しているため、土台ができれば理解のほうへ着手
#### 上記の原理　なぜそうなるのか
#### まとめ　ポジティブ意見

####　自分がわからないと意味がないので自分の言葉でアウトプットすること









ここから下は綱に忘れないように残してあるだけなので気にしない▼
## 構成１

- 目的
- 問題と解決策だけを書く
- ユースケースをイメージ出来なければアウト
- 応用（破）は基本（守）を理解してから　基本（守）に混ぜない　応用は改善と同義
- すべて理解、まとめようとすると冗長、肥大化してごちゃごちゃになるので
- 問題と対策は一対一　基本（守）で一対一　応用（破）で一対一
- というふうにひとつの記事に対してひとつの解決
- ひとつのフローに対してひとつの処理の考え方　システム

---

## 構成２

1. 記事構成（記事構成）
2. 目的（解決したい問題）
3. 解決策（対策手順の概要）
4. ユースケースのイメージ（ストーリーこれ ② かも）
5. 説明と理由（手順を段階的に）（理由を書くとイメージがさらに UP する）（関連記事へのリンク＝自分用、関連記事への後記＝稼ぎ用）
6. 実習（コード挿入）
7. まとめ　まとめるならポジティブ　まとめないケースもあるマナブさん
8. 稼ぐ要素を必ず添付
9. 応用リンク（⑤ の説明の後記）

---

## ひとつひとつ理解するための大義、フレームワーク

1. 目的と issue 本当に達成すべきか
2. 問題と改善 どのような問題を解決してくれるか
3. 基本の使い方 基本的な使い方だけ書く
4. 応用の使い方 応用して使うにはどのような知識を持っておけば良いかだけ書く
   ※前提として 1,2 のみで大枠だけ書くだけ
   ※応用は改善時に学習しないと定着不可能のため

---

## 下記自分ルール　これだけくりかえし

1. 選択と集中 選択が出来たところで無意味　意味あるものに集中して有意味　（自問:issue）
2. 理解と説明 理解できたところで無意味　難しいことをカンタンに説明ができる事で有意味 (自己理解:自分の言葉)
3. 施行と改善 施行を続けたところで無意味　施行ありきの改善を続けることで有意味 (自己改善:アップデート)

---

## わかりやすい文法はこれ ※こういうのがだめ　別記事で基本抑えないと要素がごちゃごちゃ

- わかりやすく
- 無駄を排除
- 文字おこし
- むかしむかしあるところにおじいさんとおばあさんがすんでいました
- 童話を参考にする