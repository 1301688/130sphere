import { createGlobalStyle } from "styled-components"

const variables = {
  colors: {
    base: "#121212",
    background: "#21242d", //#141c23
    blackLight: "#313746",
    gray: "#727d86",
    litegray: "#9aa0a1",
    silver: "#969fa7",
    whitesmoke: "#f1f4f7",
    highlight: "#20a8ea",
    red: "#f7615f",
    orange: "#ffa22b",
    gradient: "linear-gradient(-45deg,#ffa649,#f7645b,#805ed4)",
    lavender: "lavenderblush",
    pineappleHead: "#defcdc",
    pineappleBody: "#fbfcdc",
    pineappleBlue: "#dcfcfc",
  },
  sizes: {
    bioWidth: "250px",
    maxWidth: "950px",
  },
  sideSpace: {
    small: "20px",
    large: "1.5em",
    contentSmall: "20px",
    contentLarge: "2.5em",
  },
  responsive: {
    small: "500px",
    medium: "768px",
    large: "950px",
  },
}

export default variables

export const darkTheme = {
  body: "#121212",
  surface: "#1D1D1D",
  font: "#D1D1D1",
}

export const lightTheme = {
  body: "#FFFFFF",
  surface: "#EEF2F5",
  font: "#2A292E",
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.theme === "dark" ? "#121212" : "#FFFFFF"};
  }`
