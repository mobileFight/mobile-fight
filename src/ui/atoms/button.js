// @flow strict

import styled, { css } from "styled-components"
import { ifProp } from "@lib/styled-component-layout"
import type { StyledUI } from "../styled-with-flow"

export const Button: StyledUI<{ minimal?: boolean }> = styled.button.attrs({
  type: "button",
})`
  outline: none;
  border: none;
  color: inherit;
  font-weight: inherit;
  cursor: pointer;

  ${ifProp(
    "minimal",
    css`
      background-color: transparent;
    `,
  )}

  ${ifProp(
    "primary",
    css`
      background-color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.primaryDark};
      border-radius: 4px;
      max-width: 80%;
      width: 100%;
      padding: 8px;
      font-weight: bold;
      transition: 0.4s;
      font-weight: bold;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondaryLight};
      }
    `,
  )}
`
