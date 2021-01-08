import styled, { css } from "styled-components"
import { ifProp } from "@lib/styled-component-layout"
import okBtn from "@assets/ok-btn.png"
import cancelBtn from "@assets/cancell-btn.png"

const imagebleButtonMixin = () => css`
  width: 50px !important;
  height: 50px;
  background-color: transparent;
  color: transparent;

  &:hover {
    opacity: 0.8;
  }
`

export const Button = styled.button<{
  minimal?: boolean
  primary?: boolean
  okBtn?: boolean
  cancelBtn?: boolean
}>`
  outline: none;
  border: none;
  color: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition: 0.4s;
  padding: 0;
  margin: 0;

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

  ${ifProp(
    "okBtn",
    css`
      background-image: url(${okBtn});

      ${imagebleButtonMixin}
    `,
  )}

  ${ifProp(
    "cancelBtn",
    css`
      background-image: url(${cancelBtn});

      ${imagebleButtonMixin}
    `,
  )};
`
