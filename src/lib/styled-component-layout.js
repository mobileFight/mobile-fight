import { type CSSRules, css } from "styled-components"

export type MixinProps = {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "stretch",
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
  basis?: number | string,
  grow?: number,
  shrink?: number,
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "safe center"
    | "unsafe center",
  order?: number,
  padding?: number | string,
  width?: number | string,
}

export const is = (value?: CSSRules): boolean %checks =>
  typeof value !== "undefined"

export const prop = (value?: CSSRules): CSSRules =>
  is(value) ? value : "initial"

export const ifProp = (currentProp: CSSRules, style: { [string]: mixed }) =>
  is(currentProp) && style

export const mixins = (props: MixinProps) => css`
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
