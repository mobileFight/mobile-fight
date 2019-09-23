// @flow strict

import styled from "styled-components"
import type { StyledUI } from "../styled-with-flow"

export const Separator: StyledUI<{ w: string }> = styled.hr`
  border: none;
  background-color: #a7936d;
  height: 5px;
  width: ${(props) => props.w};
`
