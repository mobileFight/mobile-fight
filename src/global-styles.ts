import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body, html {
    background-color: ${(props) => props.theme.colors.primary};
    font-family: Tahoma,Arial;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  * {
    box-sizing: border-box
  }
`
