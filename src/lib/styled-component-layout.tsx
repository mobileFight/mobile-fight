import { css } from "styled-components"

export type MixinProps = {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "stretch"
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
  basis?: number | string
  grow?: number
  shrink?: number
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "safe center"
    | "unsafe center"
  order?: number
  padding?: number | string
  width?: number | string
}

export const is = <T,>(value?: T): boolean => Boolean(value)

export const prop = (value?: string | number): string | number =>
  is(value) ? value! : "initial"

// TODO: need typings
export const ifProp = (name: string, ifStyles: any) => (props: any) =>
  is(props[name]) && ifStyles

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
