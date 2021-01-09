import styled, { css } from "styled-components"
import { ifProp } from "@lib/styled-component-layout"

export const H3 = styled.h3<{ center: boolean }>`
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
