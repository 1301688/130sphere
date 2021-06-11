import React from "react"
import { Link } from "gatsby"
import SphereLabel from "./Spherelabel"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather } from "@fortawesome/free-solid-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

const OneCard = styled.div`
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`

const ArticleWrapper = styled.div`
  position: relative;
  text-align: center;
  border-radius: 9px;
  background: ${props => props.theme.colors.pineappleBody};
  .post-card-link {
    text-decoration: none;
  }
`
const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  color: ${props => props.theme.colors.litegray};
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.3;
  padding-bottom: 15px;
`
const Label = styled.span`
  margin: 0.6rem 0.6rem 0;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
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
  color: ${props => props.theme.colors.litegray};
  width: 1.6em;
  height: 1.6em;
  margin-right: 0.35em;
`
const EmojiContainer = styled.div`
  padding: 16px 0;
  font-size: 46px;
  line-height: 1.5;
  border-radius: 9px 9px 0 0;
  background: ${props => props.theme.colors.pineappleHead};
  text-align: center;
`
const PostTitle = styled.h3`
  margin: 0.4em 0.3em;
  font-size: 1em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.8em;
  }
  font-weight: 600;
  line-height: 1.5;
`
const PostDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.silver};
  font-size: 0.8em;
  letter-spacing: 0.06em;
`
//nodeをpropsとして渡してあげるコンポーネントなので、これ単体では動かない
//他でimportして使う場合はnodeを親から必ず渡してあげる
//他でimportして使う場合はkeyを親から必ず渡してあげる Reactでエラーが出るため
//pegesでimportして使う時にコンポーネントをmapして対象の記事を一致させないとエラーがでる

const Spherecard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slugs
  const emoji = node.frontmatter.emoji || "🔮"
  const date = node.frontmatter.date
  const updateDate = node.frontmatter.updateDate

  return (
    <OneCard>
      <ArticleWrapper>
        <Link to={node.fields.slug} className="post-card-link">
          <EmojiContainer>
            <Twemoji text={emoji} />
          </EmojiContainer>
          <PostTitle>{title}</PostTitle>
        </Link>
        <ArticleMeta>
          <Label>
            <SphereLabel slug={node.frontmatter.category} isLink="true" />
          </Label>
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
            <PostDate>{`${node.timeToRead} min read`}</PostDate>
          </ArticleMin>
        </ArticleMeta>
      </ArticleWrapper>
    </OneCard>
  )
}

export default Spherecard
