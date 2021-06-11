import { css } from "styled-components"

const sphereSyntaxHightlightStyle = css`
  .gatsby-highlight {
    font-size: 1rem;
  }
  pre[class*="language-"] {
    background-color: ${props => props.theme.colors.pineappleBody};
    display: block;
    margin: 0 0 20px;
    padding-right: 1rem;
    padding-left: 2rem;
    border-radius: 0 5px 5px 5px;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${props => props.theme.colors.litegray};
  }
  :not(pre) > code[class*="language-text"] {
    font-size: 1.4rem;
    padding: 2px 10px 3px 12px;
    margin: 0 4px;
    background-color: #3c3c3c;
  }
  .gatsby-highlight-code-line {
    background: #545454;
    display: block;
  }

  /*gatsby-remark-prismjs-title*/
  .gatsby-code-title {
    background: ${props => props.theme.colors.pineappleBlue};
    color: ${props => props.theme.colors.litegray};
    padding: 6px 12px;
    font-size: 0.8em;
    line-height: 1;
    font-weight: bold;
    display: table;
    border-radius: 5px 5px 0 0;
  }

  /* Inline code */
  p > code,
  li > code {
    display: inline-block;
    background: ${props => props.theme.colors.pineappleBlue};
    padding: 0.1em 0.3em;
    margin: 0 0.2em;
    border-radius: 3px;
    line-height: 1.4;
    color: ${props => props.theme.colors.litegray} !important;
  }
`

export default sphereSyntaxHightlightStyle
