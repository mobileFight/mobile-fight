// @flow strict

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  body, html {
    background-color: ${(props) => props.theme.colors.primary};
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  * {
    box-sizing: border-box
  }
`
