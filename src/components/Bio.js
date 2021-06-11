import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

const AsideWrapper = styled.div`
  position: sticky;
  top: 2em;
`
const BioWrapper = styled.div`
  width: ${props => props.theme.sizes.bioWidth};
  padding: 1.5em;
  font-size: 15.5px;
  background: ${props => props.theme.colors.pineappleBlue};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`
const AvatarImage = styled(Twemoji)`
  display: block;
  font-size: 50px;
`
const BioHeader = styled.div`
  display: flex;
  align-items: center;
`
const BioName = styled.div`
  margin-left: 10px;
  a {
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: black;
  }
`
const BioMain = styled.div`
  margin-top: 1em;
`
const BioText = styled.p`
  color: black;
  font-size: 0.92em;
`
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`
const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <AsideWrapper>
      <BioWrapper>
        <BioHeader>
          <AvatarImage text="🐸" />
          <BioName>
            <a
              href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
            >
              {data.site.siteMetadata.author}
            </a>
          </BioName>
        </BioHeader>
        <BioMain>
          <BioText className="biotext">One creation a day</BioText>
          <p>2021から</p>
          <p>名古屋で</p>
          <p>３児の父が</p>
          <p>プログラミングを始めました</p>
          <p>2021年6月から</p>
          <p>独学で</p>
          <p>学習内容を記録して</p>
          <p>プログラマーに転職します</p>
        </BioMain>
      </BioWrapper>
    </AsideWrapper>
  )
}

export default Bio
