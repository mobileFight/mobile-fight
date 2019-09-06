// @flow strict

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body, html {
    background-color: ${(props) => props.theme.colors.primary}
  }
`
