import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Twemoji } from "react-emoji-render"
import styled from "styled-components"

// import SEO from "../components/seo"

const Emoji = styled(Twemoji)`
  font-size: 30px;
`
// <Emoji text={node.frontmatter.emoji} />

// 記事一覧ページのテンプレートを作成する
// gatsby-node.jsでgraphqlの記事総数を取得して表示したい内容を記述した雛形
const Sphere = ({ data, location, pageContext }) => {
  return (
    <div>
      <Layout>
        <section className="content list">
          <div className="container">
            <h1 className="bar">Power SpheRe</h1>
            <div className="spheres">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article className="sphere" key={node.id}>
                  <Link to={node.fields.slug}>
                    <figure></figure>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                </article>
              ))}
            </div>
            <ul className="pagenation">
              {!pageContext.isFirst && ( //前のページのリンク先は現在のページ(currentPage)が2ページ目の場合は「/blog/」、それ以外の場合は「/blog/現在のページ番号から1引いた値/」となるようにしている
                <li className="prev">
                  <Link
                    to={
                      pageContext.currentPage === 2
                        ? `/sphere/`
                        : `/sphere/${pageContext.currentPage - 1}/`
                    }
                    rel="prev"
                  >
                    <Emoji text="👈" />
                    <span>before</span>
                  </Link>
                </li>
              )}
              {!pageContext.isLast && ( //次のページのリンク先は「/blog/現在のページ番号に１足した値/」となるようにしている
                <li className="next">
                  <Link
                    to={`/sphere/${pageContext.currentPage + 1}/`}
                    rel="next"
                  >
                    <span>next</span>
                    <Emoji text="👉" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            category
            date
            description
            emoji
            updateDate
            title
            type
          }
        }
      }
    }
  }
`

export default Sphere

// topImage {
//   childImageSharp {
//     fixed(width: 200) {
//       ...GatsbyImageSharpFixed_withWebp
//     }
//   }
// }

// 21から
// <SEO
//           pagetitle="SpheRe"
//           pagedesc="SpheReを集める"
//           pagepath={location.pathname}
//         />
