---
title: "styled-components"
date: "2021-06-24"
updateDate: ""
type: ""
category: "css"
description: "styled-components"
emoji: "ð¨"
topImage: ""
---
- styled-componentsã®å©ç¹
```
1. å¾æ¥ã®CSSã¯å½åè¦åãç©é
ããå¾æ¥ã®CSSã§ã¯ãã¹ã¦ã®ã»ã¬ã¯ã¿ã¼ãåãååç©ºéã«å­å¨ãããã
   ãµã¤ãåã®ä»ã®å ´æã§ä½¿ç¨ããã¦ããCSSã»ã¬ã¯ã¿ã¼ãä¸æ¸ãããªãããã«
   æ³¨æããå¿è¦ãããã®ã§å½åè¦åãè¤éã«ãªã£ã¦ãã
2. ã¹ã³ã¼ãç®¡çãæ¥½
ããCSS-in-JSãä½¿ç¨ããã¨CSSã»ã¬ã¯ã¿ã¼ãã³ã³ãã¼ãã³ãåã«  
   èªåçã«ã¹ã³ã¼ããããããCSSã®åé¡ããã¹ã¦åé¿ã§ãã
3. ã³ã³ãã¼ãã³ãåä½ã®ç·¨éã§ãã¹ã«æ°ã¥ãããã
ããã¹ã¿ã¤ã«ã¯ã³ã³ãã¼ãã³ãã¨å¯æ¥ã«çµã³ã¤ãã¦ãã
   ããã«ããCSSãã©ãã§ã©ã®ããã«ä½¿ç¨ããã¦ãããã«ã¤ãã¦  
   æ··ä¹±ãçããªãããã³ã³ãã¼ãã³ãã®CSSç·¨éãé¥ãã«ãããããªã
4. ã¬ã¹ãã³ã¹æ¹åã«ã¤ãªãã
   ã¬ã³ããªã³ã°ãããã³ã³ãã¼ãã³ãã ãã®ã¹ã¿ã¤ã«ãåãè¾¼ããã¨ã§ä½¿ç¨ãã¦ããªã  
   ã¹ã¿ã¤ã«ãã¤ã³ãã¼ãããå¿è¦ããªããªããå¾æ¥ã®CSSãã¡ã¤ã«ã ã¨ãã¹ã¦ã®ã¹ã¿ã¤ã«ã
   åãè¾¼ãå¿è¦ããã£ããstyled-componentsã§ã¯ãã®å¿è¦ããªã
```
#### styled-componentsã®ã¤ã³ã¹ãã¼ã«ã¨è¨­å®
- Macã®å ´å
```
â¼ ã¿ã¼ããã«ãã²ãã
$ yarn add styled-components
$ yarn add gatsby-plugin-styled-components
$ yarn add babel-plugin-styled-components
```
- gatsby-config.jsã«è¨­å®ãã
```
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}
```

#### styled-componentsã§å¼æ°ãä½¿ã
- propsã«å¼æ°ãæ¸¡ãããã®ã§ãã³ãã¬ã¼ããªãã©ã«ã§ãã®å±æ§ãä½¿ã
```
import styled from "styled-components"

export default function Home() {
  //ã¿ã¤ãã«
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    //å¼æ°ã«è²ãæ¸¡ãããã°è¨­å®ãããä¸é æ¼ç®å­
    color: ${props => props.color ? props.color : "green"};
  `;
  return (
      <Title color="red">Hello!</Title>     [èµ¤]
      <Title color="#ffffff">World</Title>  [é»]
      <Title>styled-components</Title>      [ç·]
  );
}
```
#### styled-componentsã§ã¹ã¿ã¤ã«ã®æ¡å¼µ
- ãã¼ã¹ã¨ãªãã³ã³ãã¼ãã³ããæå®ãã¦ã¹ã¿ã¤ã«ãæ¡å¼µã§ãã
- styledã¡ã¾ããã®å¼æ°ãæ¸¡ãã¦ãã³ãã¬ã¼ããªãã©ã«ã«ä¸æ¸ãããã¹ã¿ã¤ã«ãè¿½è¨ãã
```
import styled from "styled-components"

export default function Home() {
  //ãã¼ã¹ã®ã¿ã¤ãã«
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: green;
  `;
   //éè²ã¿ã¤ãã« && å¤ªå­
  const BlueTitle = styled(Title)`
    color: blue;
    font-weight: bold;                
  `;
  //èµ¤è²ã¿ã¤ãã« && ä¸ç·
  const RedTitle = styled(Title)`
    color: red;
    text-decoration: underline;        
  `;

  return (
      <Title>Hello!</Title>
      <BlueTitle>Hello!</Title>
      <RedTitle>Hello!</Title>
  );
}
```
##### åèãµã¤ãã
- https://qiita.com/taneba/items/55e04cb789b0b0dd7603
- https://zenn.dev/kupuma_ru21/articles/66fd3499c7f3ef
- https://zenn.dev/syu/articles/0f92abf7f0b5c5
- https://www.fundely.co.jp/blog/tech/2020/09/16/180026/
- https://blog.cybozu.io/entry/2020/06/25/105457
