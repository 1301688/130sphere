import React from "react"
import Toggler from "./Toggler"
import ContentWrapper from "./ContentWrapper"
import { Link } from "gatsby"
import styled from "styled-components"
import { Twemoji } from "react-emoji-render"

const HeaderRow = styled.header`
  /* position: sticky;
  top: 0; */
`
const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  h1 {
    display: inline-block;
    margin-left: 30px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    font-size: 0.8em;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 0.6em;
  }
`
const Emoji = styled(Twemoji)`
  font-size: 130px;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    font-size: 65px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 33px;
  }
`
const Nav = styled.nav`
  display: block;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    padding: 0 auto;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0 auto;
  }
`
const Navlist = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 10 10;
  padding-left: 0;
`
const Navitem = styled.li`
  color: #999999;
  font-size: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1em 0;
    font-size: 7px;
    margin: 0 auto;
  }
  .nav-item__link {
    color: #999999;
  }
  .nav-item__link:hover {
    color: #666666;
  }
  .active-nav-item__link {
    color: #333333;
  }
`
const Header = () => {
  return (
    <HeaderRow>
      <HeaderWrapper>
        <Link to="/">
          <Emoji text="🔮" />
          <h1>SpheRe</h1>
        </Link>
      </HeaderWrapper>
      <ContentWrapper>
        <Nav>
          <Navlist>
            <Navitem>
              <Link
                to="/"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                SpheRe
              </Link>
            </Navitem>
            <Navitem>
              <Link
                to="/power"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                POWER
              </Link>
            </Navitem>
            <Navitem>
              <Link
                to="/magic"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                MAGIC
              </Link>
            </Navitem>
            <Navitem>
              <Link
                to="/speed"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                SPEED
              </Link>
            </Navitem>
            <Navitem>
              <Link
                to="/lucky"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                LUCKY
              </Link>
            </Navitem>
            <Navitem>
              <Link
                to="/special"
                className="nav-item__link"
                activeClassName="active-nav-item__link"
              >
                SPECIAL
              </Link>
            </Navitem>
            <Toggler />
          </Navlist>
        </Nav>
      </ContentWrapper>
    </HeaderRow>
  )
}

export default Header
