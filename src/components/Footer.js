import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Footers = styled.footer`
  position: sticky;
  bottom: 0;
`
const FooterText = styled.p`
  font-size: 16px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Footers>
      <FooterText>
        Created by {data.site.siteMetadata.author} ©{new Date().getFullYear()}
      </FooterText>
    </Footers>
  )
}

export default Footer
