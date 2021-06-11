const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const { reporter } = require("gatsby-cli/lib/reporter/reporter")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //nodeからMarkdown ファイルを取得
  if (node.internal.type === `MarkdownRemark`) {
    //Markdown ファイルの node 自体には relativePath(相対パス)を持っていないため node.parent(親)に getNode メゾットでアクセスする
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      //slugをcreateNodeField メゾットで node に追加を行う
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// nodeで取得するquery:sphereresult 他の手法としてエイリアスで複数queryを作成して
// それぞれのonCreatePageに当てるとコードが読みやすい　参考→https://vanilla-note.com/posts/adding-pagination/
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const sphereresult = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              emoji
              category
              updateDate
              type
            }
          }
        }
      }
    }
  `)
  if (sphereresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  } // 定数すべてのスフィア作成　グローバル　↑のqueryで取得したデータと思えば良い
  const spheres = sphereresult.data.allMarkdownRemark.edges
  // カテゴリの空箱作る　配列
  let categories = []
  // すべてのスフィアぶんまわし、スフィアがカテゴリ持ってたらカテゴリの空箱に入れてく
  spheres.forEach(sphere => {
    if (sphere.node.frontmatter.category) {
      categories.push(sphere.node.frontmatter.category)
    }
  })
  // 上で作った箱をNewしてガテゴリーズにする　グローバル
  categories = new Set(categories)
  // カテゴリーズをぶんまわしてcreatePageメゾットでカテゴリー毎のページをつくる　spherecat-template.jsのロジックベースでできるページのクローン
  categories.forEach(category => {
    createPage({
      path: `/category/${category}/`,
      component: path.resolve("src/templates/spherecat-template.js"),
      context: {
        category,
      },
    })
  })

  // 変数カテゴリ関連するすべてのスフィアの空オブジェクト作成
  let allRelatedSpheres = {}
  // 上で作ったカテゴリーズのカテゴリを引数にぶんまわして... あかん、わからんからfilterメゾットのユースケース調べて！
  categories.forEach(category => {
    let categorySpheres = spheres.filter(sphere => {
      return sphere.node.frontmatter.category === category
    })
    allRelatedSpheres[category] = categorySpheres
      ? categorySpheres.slice(0, 6)
      : []
  })

  // ページの自動生成　spherepost-template.jsのクローン
  spheres.forEach(({ node }) => {
    //　ここから下の３行、relatedSpheresは上のallRelatedSpheresが絡んでるのでおそらくページネーションなんやけど今んとこ効いてない
    let relatedSpheres = allRelatedSpheres[node.frontmatter.category]
    relatedSpheres = relatedSpheres.filter(relatedSphere => {
      return !(relatedSphere.node.fields.slug === node.fields.slug)
    })
    // GatsbyAPIのcreatePageメゾットでsphereを動的に作成する
    createPage({
      path: node.fields.slug, //ページのパス設定
      component: path.resolve(`./src/templates/spherepost-template.js`), //ページテンプレートのパス設定
      context: {
        slug: node.fields.slug,
        relatedSpheres,
      },
    })
  })

  // 一覧ページの自動生成　sphere-template.jsのクローン作成
  const spherePostsPerPage = 3
  const spherePosts = spheres.length
  const spherePages = Math.ceil(spherePosts / spherePostsPerPage)

  Array.from({ length: spherePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/sphere/` : `/sphere/${i + 1}/`,
      component: path.resolve(`./src/templates/sphere-template.js`),
      context: {
        skip: spherePostsPerPage * i,
        limit: spherePostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === spherePages,
      },
    })
  })
}
