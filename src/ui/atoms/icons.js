// @flow strict

import styled from "styled-components"
import icons from "@assets/sprites/icons.png"
import type { StyledUI } from "../styled-with-flow"

const indexes = {
  money: {
    copper: 3,
    silver: 0,
    gold: 1,
    platinum: 2,
  },
  location: {
    quest: 1,
    pointer: 0,
  },
}

const sizes = {
  money: { size: 20, padding: 0 },
  location: { size: 26, padding: 80 },
}

export type SpriteIconAssets = $Values<typeof indexes>

export type IconsType = "money" | "location"

export type SpriteIconProps = {
  icon: SpriteIconAssets,
  type: IconsType,
}

export function getIconSize(type: IconsType) {
  return sizes[type].size
}

export function getIconPadding(type: IconsType) {
  return sizes[type].padding
}

export function getIconPosition(icon: SpriteIconAssets, type: IconsType) {
  return -icon * getIconSize(type) - getIconPadding(type)
}

const SpriteIcon: StyledUI<SpriteIconProps> = styled.div`
  width: ${(props) => getIconSize(props.type)}px;
  height: ${(props) => getIconSize(props.type)}px;
  background-image: url(${icons});
  background-position-x: ${(props) =>
    getIconPosition(props.icon, props.type)}px;
  background-repeat: no-repeat;
`

export const spriteIcon = {
  indexes,
  component: SpriteIcon,
}
