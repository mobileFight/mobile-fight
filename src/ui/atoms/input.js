// @flow strict

import styled from "styled-components"
import type { StyledEmptyUI } from "../styled-with-flow"

export const Input: StyledEmptyUI = styled.input.attrs({
  type: "text",
})`
  outline: none;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  flex: 1 1 auto;
  padding: 5px 15px;
`
