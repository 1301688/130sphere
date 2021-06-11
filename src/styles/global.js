import { createGlobalStyle } from "styled-components"
import "fontsource-montserrat-alternates/500.css"

const GlobalStyle = createGlobalStyle`
/* Reset provided by https://github.com/gatsbyjs/gatsby-starter-blog via MIT license */

  body {
    
    color:grey;
    font-family: 'montserrat alternates'
    
  }
  a {
    color:grey;
    text-decoration: none;
    :hover {
      color: ${props => props.theme.colors.highlight};
      text-decoration: none;
      transition: .2s;
    }
    :focus{
      outline: none;
    }
  }
`
export default GlobalStyle
