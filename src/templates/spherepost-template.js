import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"
import Layout from "../components/Layout"
// import SEO from "../components/SEO"
import RelatedSphere from "../components/RelatedSphere"
import Spherelabel from "../components/Spherelabel"
import Followbudge from "../components/FollowBudge"
import Toc from "../components/Toc"
import svgPattern from "../../static/spherePurple.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather } from "@fortawesome/free-solid-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

import sphereContentStyle from "../styles/sphereContent"
import sphereCustomBlockStyle from "../styles/sphereCustomBlock"
import sphereSyntaxHightlightStyle from "../styles/sphereSyntaxHightlight"

const ArticleWrapper = styled.div`
  position: relative;
  text-align: center;
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  background: ${props => props.theme.colors.pineappleBody};
`
const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  color: ${props => props.theme.colors.silver};
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.3;
  padding-bottom: 16.8px;
`
const ArticlePubdate = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const ArticleMin = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
`
const Svg = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.silver};
  width: 1.6em;
  height: 1.6em;
  margin-right: 0.35em;
`
const Content = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  font-size: 16px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    z-index: 5;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 20px solid ${props => props.theme.colors.background};
    /* border-right: 20px solid transparent; */
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 20px solid ${props => props.theme.colors.background};
    /* border-left: 20px solid transparent; */
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 -${props => props.theme.sideSpace.small};
    &:before,
    &:after {
      content: none;
    }
  }
`
const HeroImage = styled(Twemoji)`
  position: relative;
  background: ${props => props.theme.colors.pineappleHead};
  text-align: center;
  // 下記記述するとHeloImageの背景がパターン化出来る
  /* background-image: url("${svgPattern}");
  background-repeat: repeat;
  background-size: 88px; */
  min-height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  border-radius: 9px 9px 0 0;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    min-height: 190px;
  }
`
const ContentMain = styled.div`
  padding: 1.8em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`
const PostTitle = styled.h1`
  margin: 0.68em 0 0.68em;
  font-size: 1.68em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 23px;
  }
  font-weight: 600;
  line-height: 1.5;
`
const PostDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.silver};
  font-size: 1.3em;
  letter-spacing: 0.06em;
`
const PostContent = styled.div`
  ${sphereContentStyle}
  ${sphereCustomBlockStyle}
  ${sphereSyntaxHightlightStyle}
`
// 記事ページのテンプレートを作成する
// gatsby-node.jsでgraphqlの.mdファイルに該当すれば自動生成する際のページ雛形
class SpherePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { relatedSpheres } = this.props.pageContext
    const {
      title,
      description,
      date,
      category,
      emoji,
      type,
      updateDate,
    } = post.frontmatter
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Content>
          <ArticleWrapper>
            <HeroImage text={emoji || "🔮"} />
            <PostTitle>{title}</PostTitle>
            <ArticleMeta>
              <ArticlePubdate>
                <Spherelabel slug={category} isLink="true" />
              </ArticlePubdate>
              <ArticlePubdate>
                <Svg icon={faFeather} />
                <PostDate>{date}</PostDate>
              </ArticlePubdate>
              <ArticlePubdate>
                <Svg icon={faSpinner} />
                <PostDate>{updateDate ? updateDate : "No update"}</PostDate>
              </ArticlePubdate>
              <ArticleMin>
                <Svg icon={faClock} />
                <PostDate>{`${post.timeToRead} min read`}</PostDate>
              </ArticleMin>
            </ArticleMeta>
          </ArticleWrapper>

          <ContentMain>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
            <Followbudge />
          </ContentMain>
          <aside>
            <Toc
              dangerouslySetInnerHTML={{
                __html: post.tableOfContents,
              }}
            />
            <RelatedSphere spheres={relatedSpheres} />
          </aside>
        </Content>
      </Layout>
    )
  }
}

export default SpherePostTemplate

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      headings {
        id
        value
      }
      timeToRead
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
`
// 153から
// <SEO
//           pagetitle={title}
//           pagedesc={description || post.excerpt}
//           pagepath={this.props.location.pathname}
//         />
