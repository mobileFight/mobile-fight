// @flow strict

import styled, { css } from "styled-components"
import { EquipmentsScheme } from "shared-types"
import icons from "@assets/sprites/icons.png"
import { ifProp } from "@lib/styled-component-layout"
import { type StyledUI } from "../styled-with-flow"

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
  equipment: {
    [EquipmentsScheme.belt]: 0,
    [EquipmentsScheme.armor]: 1,
    [EquipmentsScheme.bracer]: 2,
    [EquipmentsScheme.footwear]: 3,
    [EquipmentsScheme.quests]: 4,
    [EquipmentsScheme.helmet]: 5,
    [EquipmentsScheme.weapon]: 6,
    [EquipmentsScheme.shield]: 7,
    [EquipmentsScheme.ring]: 8,
    [EquipmentsScheme.suspension]: 9,
  },
}

const sizes = {
  money: { size: 20, padding: 0 },
  location: { size: 26, padding: 300 },
  equipment: { size: 22, padding: 80 },
}

export type SpriteIconAssets = $Values<typeof indexes>

export type IconsType = "money" | "location" | "equipment"

export type SpriteIconProps = {
  icon: SpriteIconAssets,
  type: IconsType,
  inline?: boolean,
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

  ${ifProp(
    "inline",
    css`
      display: inline-block;
    `,
  )}
`

export const spriteIcon = {
  indexes,
  component: SpriteIcon,
}
