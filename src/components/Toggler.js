import React, { useState } from "react"
import { DarkModeToggler } from "react-darkmode-toggler"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "../styles/theme"

const Div = styled.div`
  margin: 0 auto;
  display: inline-block;
  margin-right: 15px;
`

export default () => {
  const [isDark, setIsDark] = useState("light")

  // Dark mode button toggler
  const darkModeHandler = () => {
    setIsDark(isDark === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle theme={isDark} />
      <Div>
        <DarkModeToggler
          size="small"
          isDark={isDark}
          onClick={darkModeHandler}
          border="#000000"
        />
      </Div>
    </ThemeProvider>
  )
}
