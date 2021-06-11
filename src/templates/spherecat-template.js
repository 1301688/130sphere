import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Twemoji } from "react-emoji-render"
import styled from "styled-components"
import Spherecard from "../components/spherecard"

import SEO from "../components/seo"

const Emoji = styled(Twemoji)`
  font-size: 30px;
`
// <Emoji text={node.frontmatter.emoji} />

// カテゴリページのテンプレートを作成する
// gatsby-node.jsでgraphqlのcategory毎に該当したファイルを自動生成する際のページ雛形
class CategoryTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const posts = data.allMarkdownRemark.edges
    const { location } = this.props
    // get Category name from category slug
    const categorySlug = pageContext.category
    const categoryObject = data.site.siteMetadata.categories.find(cat => {
      return cat.slug === categorySlug
    })
    // use slug when name doesn't exist
    const categoryName = categoryObject ? categoryObject.name : categorySlug

    return (
      <Layout location={this.props.location} title={categoryName}>
        <SEO title={categoryName} />
        <h1>{categoryName}</h1>
        {posts.map(({ node }) => {
          return (
            <h3 key={node.fields.slug} node={node}>
              <Spherecard key={node.fields.slug} node={node} />
            </h3>
          )
        })}
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query BlogPostByCategory($category: String) {
    site {
      siteMetadata {
        categories {
          name
          slug
          color
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            emoji
            category
          }
          timeToRead
        }
      }
    }
  }
`
