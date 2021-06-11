import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  background: ${props => props.theme.colors.pineappleBlue};
  padding: 2em ${props => props.theme.sideSpace.contentLarge};
  border-radius: 5px;
  box-sizing: border-box;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

const SphereCardWrapper = styled.div`
  .sphere-card-link {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding: 15px;
    background: ${props => props.theme.colors.whitesmoke};
    border-radius: 5px;
    box-sizing: border-box;
    color: ${props => props.theme.colors.blackLight};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      background: #e0ebf1;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      padding: 10px;
    }
  }
`
const SphereCardEmoji = styled(Twemoji)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  background: ${props => props.theme.colors.whitesmoke};
  border-radius: 4px;
  font-size: 25px;
`
const SphereCardContent = styled.div`
  width: calc(100% - 80px);
  padding-left: 15px;
  h5 {
    font-size: 1.1em;
    font-weight: 600;
    line-height: 1.45;
  }
  time {
    display: block;
    margin-bottom: 0.1em;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    color: ${props => props.theme.colors.silver};
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding-left: 15px;
    h5 {
      font-size: 1em;
    }
  }
`

const RelatedSphereCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const emoji = node.frontmatter.emoji || "🔮"

  return (
    <SphereCardWrapper>
      <Link to={node.fields.slug} className="sphere-card-link">
        <SphereCardEmoji text={emoji} />
        <SphereCardContent>
          <h5>{title}</h5>
          <time>{node.frontmatter.date}</time>
        </SphereCardContent>
      </Link>
    </SphereCardWrapper>
  )
}

const RelatedSphere = ({ spheres }) => {
  if (!spheres.length) return null
  let content = []

  spheres.forEach(sphere => {
    content.push(
      <RelatedSphereCard key={sphere.node.fields.slug} node={sphere.node} />
    )
  })
  return <Wrapper>{content}</Wrapper>
}

export default RelatedSphere
