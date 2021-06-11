import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import svgSphereAqua from "../../static/sphereAqua.svg"
import svgSphereYellow from "../../static/sphereYellow.svg"
import svgSphereBlue from "../../static/sphereBlue.svg"
import svgSphereLightBlue from "../../static/sphereLightBlue.svg"
import svgSphereGreen from "../../static/sphereGreen.svg"
import svgSpherePurple from "../../static/spherePurple.svg"
import svgSphereRed from "../../static/sphereRed.svg"

const SphereCategoryList = styled.li`
  list-style: none;
`
const SphereCategoryBox = styled(Link)`
  display: flex;
  text-align: center;
`
const SphereImg = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 20px;
    height: 20px;
  }
`
const SphereImgName = styled.a`
  display: block;
  margin-top: 5px;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.gray};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.2em;
  }
`
const SphereNav = styled.nav`
  display: block;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
`
const SphereUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    margin: auto;
    justify-content: space-around;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 auto;
    padding-left: 0;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: "";
      width: 30px;
      flex: 0 0 auto;
    }
  }
`

const SphereLink = ({ spheName, spheSvg, spheLink, path }) => {
  return (
    <SphereCategoryList className={spheLink === path && "active"}>
      <SphereCategoryBox to={spheLink}>
        <SphereImgName>
          <SphereImg src={spheSvg} alt={spheName} />
          <div>{spheName}</div>
        </SphereImgName>
      </SphereCategoryBox>
    </SphereCategoryList>
  )
}

const Spherecategory = ({ location }) => {
  const path = location.pathname
  return (
    <SphereNav>
      <SphereUl>
        <SphereLink
          spheName="JavaScript"
          spheSvg={svgSphereYellow}
          spheLink="/category/javascript"
          path={path}
        />
        <SphereLink
          spheName="CSS"
          spheSvg={svgSphereLightBlue}
          spheLink="/category/css"
          path={path}
        />
        <SphereLink
          spheName="React"
          spheSvg={svgSphereAqua}
          spheLink="/category/react"
          path={path}
        />
        <SphereLink
          spheName="Node"
          spheSvg={svgSphereGreen}
          spheLink="/category/node"
          path={path}
        />
        <SphereLink
          spheName="Gatsby"
          spheSvg={svgSpherePurple}
          spheLink="/category/gatsby"
          path={path}
        />
        <SphereLink
          spheName="TypeScript"
          spheSvg={svgSphereBlue}
          spheLink="/category/typescript"
          path={path}
        />
        <SphereLink
          spheName="ALL"
          spheSvg={svgSphereRed}
          spheLink="/category/all"
          path={path}
        />
      </SphereUl>
    </SphereNav>
  )
}

export default Spherecategory
