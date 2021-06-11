import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const CategoryLink = styled(Link)`
  width: 81px;
  height: 23px;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CategoryLinkOther = styled.span``
const Category = styled.div``

const Spherelabel = ({ slug, isLink }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          categories {
            name
            slug
            color
          }
        }
      }
    }
  `)

  if (!slug) return null
  const { categories } = data.site.siteMetadata
  const categoryObject = categories.find(cat => {
    return cat.slug === slug
  })
  const categoryName = categoryObject ? categoryObject.name : slug
  const categoryColor = categoryObject ? categoryObject.color : "#6d4bf5"
  const content = isLink ? (
    <CategoryLink
      to={`/category/${slug}`}
      className="category-text"
      style={{
        background: categoryColor,
      }}
    >
      {categoryName}
    </CategoryLink>
  ) : (
    <CategoryLinkOther
      className="category-text"
      style={{
        background: categoryColor,
      }}
    >
      {categoryName}
    </CategoryLinkOther>
  )
  return <Category className="wrapper">{content}</Category>
}

export default Spherelabel
