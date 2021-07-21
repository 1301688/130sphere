/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `SpheRe`,
    author: `130`,
    description: `130の個人ブログ。プログラミング初心者目線で情報を発信するサイトです。`,
    lang: `ja`,
    siteUrl: `https://frosty-mirzakhani-bfeb30.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXX`,
    social: {
      twitter: `JP_waikiki_130`,
    },
    // categories_2とか3を作って生成したら複数ページいけそう
    categories: [
      {
        name: "JavaScript" || "JS", // 左記をif文で書きたい　理由はレスポンシブ　今の所方法がわからない
        slug: "javascript",
        color: "#77c5fc",
      },
      {
        name: "CSS",
        slug: "css",
        color: "#B0E8F0",
      },
      {
        name: "React",
        slug: "react",
        color: "#B0D4F0",
      },
      {
        name: "Node",
        slug: "node",
        color: "#B0F0C0",
      },
      {
        name: "Gatsby",
        slug: "gatsby",
        color: "#D4B0F0",
      },
      {
        name: "TypeScript",
        slug: "typescript",
        color: "#B0B0F0",
      },
      {
        name: "ALL",
        slug: "all",
        color: "#F0B0CE",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sphere`,
        name: `sphere`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, //content(記事用)の画像ファイルへのパス
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-emoji-favicon`,
      options: {
        emoji: `🐸`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`, //mdファイルのデータをnodeに追加しHTMLに変換してくれるイメージ
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 550,
              height: 200,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: ["Table of Contents", "TOC", "目次"], // exclude（String or Array）：指定した文字列に一致するタイトルを目次から除外
              fromHeading: 2, // fromHeading（Number）：目次を生成する最小のhタグ（デフォルトは<h2>）
              toHeading: 6, // toHeading（Number）：目次を生成する最大のhタグ（デフォルトは<h6>）
              className: "toc-block", // className（String）：生成された目次要素のクラス名を設定（デフォルトはtoc）
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              //icon（Template literal or Boolean）：独自のSVGアイコンを設定、またはアイコンを非表示
              className: `toc-icon`, // className（String）：アンカーアイコンに独自クラスを設定
              //elements: [`h2`], // elements（Array）：idやアンカーアイコンを設定するhタグを指定
            },
          },
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SpheRe | スフィア`,
        short_name: `SpheRe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#20a8ea`,
        display: `standalone`,
        icon: `static/sphereAqua.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
