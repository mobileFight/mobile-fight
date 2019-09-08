// @flow strict
import { type ComponentType } from "react"
import styled from "styled-components"
import icons from "@assets/sprites/icons.png"

const indexes = {
  copper: 3,
  silver: 0,
  gold: 1,
  platinum: 2,
}

export type SpriteIconAssets = $Values<typeof indexes>

export type SpriteIconProps = {
  icon: SpriteIconAssets,
}

export const SpriteIcon: ComponentType<SpriteIconProps> = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${icons});
  background-position-x: ${(props) => -props.icon * 20}px;
  background-repeat: no-repeat;
`

export const spriteIcon = {
  indexes,
  component: SpriteIcon,
}
