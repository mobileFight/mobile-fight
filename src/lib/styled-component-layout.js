import { css } from "styled-components"

export const is = (value) => typeof value !== "undefined"
export const prop = (value) => (is(value) ? value : "initial")
export const ifProp = (currentProp, style) => is(currentProp) && style

export const mixins = (props) => css`
  align-content: ${prop(props.alignContent)};
  align-items: ${prop(props.align)};
  flex-basis: ${prop(props.basis)};
  flex-grow: ${prop(props.grow)};
  flex-shrink: ${prop(props.shrink)};
  justify-content: ${prop(props.justify)};
  order: ${prop(props.order)};
  padding: ${prop(props.padding)};
  width: ${prop(props.width)};
`
