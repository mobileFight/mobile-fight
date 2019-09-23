// @flow strict

import styled, { css } from "styled-components"
import { ifProp } from "@lib/styled-component-layout"
import type { StyledUI } from "../styled-with-flow"

export const H3: StyledUI<{ center: boolean }> = styled.h3`
  display: block;
  font-size: 15px;
  color: black;
  font-weight: 200;

  ${ifProp(
    "center",
    css`
      text-align: center;
    `,
  )}
`
