import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

const TocWrapper = styled.div`
  /* position: sticky; */
  top: 2em;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.sideSpace.large};
  font-size: 15.5px;
  background: ${props => props.theme.colors.whitesmoke};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0 ${props => props.theme.sideSpace.small};
  }
`

const AvatarImage = styled(Twemoji)`
  display: block;
  font-size: 30px;
`

const TocHeader = styled.div`
  display: flex;
  align-items: center;
`
const TocName = styled.h4`
  margin-left: 10px;
  a {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: black;
  }
`
const TocMain = styled.div`
  margin-top: 5em 0;
`
const TocText = styled.p`
  color: black;
  font-size: 0.92em;
  padding-bottom: 8px;
`
const Toc = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {}) {
        edges {
          node {
            tableOfContents
          }
        }
      }
    }
  `)

  const dangerouslySetInnerHTML = props.dangerouslySetInnerHTML //|| data.site.siteMetadata.description

  return (
    <TocWrapper>
      <TocHeader>
        <AvatarImage text="🍍" />
        <TocName>もくじ</TocName>
      </TocHeader>
      <TocMain>
        <TocText dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      </TocMain>
    </TocWrapper>
  )
}

export default Toc
