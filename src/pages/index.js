import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Twemoji } from "react-emoji-render"
import { ThemeProvider } from "styled-components"
import Theme from "../styles/theme"
import Layout from "../components/Layout"
import SphereCategory from "../components/Spherecategory"
import Spherecard from "../components/Spherecard"
// import SEO from "../components/SEO"

const Emoji = styled(Twemoji)`
  font-size: 30px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.68em 1.68em;
`
class Board extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.siteMetadata.title　LayoutComponentが関係
    const posts = data.allMarkdownRemark.edges
    const { location } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Layout>
          <h1>SphereBoard</h1>
          <SphereCategory location={location} />
          <GridContainer>
            {posts.map(({ node }) => {
              return <Spherecard key={node.fields.slug} node={node} />
            })}
          </GridContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default Board

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 100
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
          timeToRead
        }
      }
    }
    index: file(relativePath: { eq: "enterprise.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          height
          src
          width
        }
      }
    }
  }
`
// 30の下から
// <SEO
//             pagetitle="Boardについて" //siteMetadataから取ったほうが良さそう
//             pagedesc="Boardについての情報を発信しているSpheRe"
//             pagepath={location.pathname}
//           />
