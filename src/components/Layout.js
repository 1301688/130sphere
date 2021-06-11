import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import ContentWrapper from "./ContentWrapper"
import Header from "./Header"
import Footer from "./Footer"
import Bio from "./Bio"
import styled from "styled-components"

const Content = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  min-height: 85vh;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`
const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.bioWidth} - 40px);
  margin-right: 40px;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`
class Layout extends React.Component {
  render() {
    // const { relatedPosts, slug } = this.props.pageContext;
    const { location, children, title, data } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div className="siteRoot">
          <Header title={title} location={location} />
          <ContentWrapper>
            <Content>
              <MainWrapper>
                <main>{children}</main>
              </MainWrapper>
              　<Bio />
            </Content>
          </ContentWrapper>
          <Footer className="main-footer" />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}
export default Layout
