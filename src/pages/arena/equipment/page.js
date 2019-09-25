// @flow strict

import React from "react"
import styled, { css } from "styled-components"
import { EquipmentsScheme } from "shared-types"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { H3, spriteIcon } from "@mobileFight/ui/atoms"
import type { StyledEmptyUI } from "@mobileFight/ui/styled-with-flow"
import { List } from "@features/common"
import { ifProp } from "@lib/styled-component-layout"

const menuItems = [
  {
    title: "Чат",
    to: "/chat",
  },
]

const equipments = [
  {
    equip: true,
    title: "Крепкая дубина",
    count: "7",
    type: EquipmentsScheme.weapon,
    placeholder: "Оружие",
  },
  {
    equip: true,
    title: "Круглый щит",
    count: "4",
    type: EquipmentsScheme.shield,
    placeholder: "Щит",
  },
  {
    equip: true,
    title: "Шлем Витаса",
    count: "1",
    type: EquipmentsScheme.helmet,
    placeholder: "Шлем",
  },
  {
    equip: true,
    title: "Поручни Гладиолуса",
    count: "4",
    type: EquipmentsScheme.bracer,
    placeholder: "Наручи",
  },
  {
    equip: true,
    title: "Кольца Витаса",
    count: "4",
    type: EquipmentsScheme.armor,
    placeholder: "Броня",
  },
  {
    equip: true,
    title: "Шлепанцы Гладиолуса",
    count: "1",
    type: EquipmentsScheme.footwear,
    placeholder: "Поножи",
  },
  {
    equip: true,
    title: "Подвеска Стажника",
    count: "1",
    type: EquipmentsScheme.suspension,
    placeholder: "Амулет",
  },
  {
    equip: true,
    title: "Бронекольцо",
    count: "1",
    type: EquipmentsScheme.ring,
    placeholder: "Кольца",
  },
  {
    equip: false,
    count: "0",
    type: EquipmentsScheme.belt,
    placeholder: "Пояс",
  },
  {
    equip: true,
    count: "5",
    title: "Для заданий",
    type: EquipmentsScheme.quests,
  },
]

const EquipmentItem: StyledEmptyUI = styled.li`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  padding: 15px 20px;
  display: flex;
  align-items: flex-start;
  transition: 0.4s;
  background-color: ${(props) => props.theme.colors.primaryLight};
  margin-bottom: 3px;
  user-select: none;
  cursor: pointer;
  align-items: center;

  > img {
    width: 80px;
    height: 80px;
  }

  > p {
    margin: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hovered};
  }

  ${ifProp(
    "isEmpty",
    css`
      > p {
        color: #706671;
      }
    `,
  )}
`

const EquipmentCount = styled.div`
  font-weight: bold;
  margin-right: 5px;
`

const EquipmentBody = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 0px;
  flex: 1 1 auto;
`

const Icon = styled(spriteIcon.component)`
  margin-right: 5px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  > p {
    margin: 0;
    padding: 10px 0px;
  }
`

const EquipmentStyle = styled.span`
  font-weight: bold;
`

export function HeroEquipmentPage() {
  return (
    <ArenaTemplate footer={<ArenaFooter menuItems={menuItems} isNested />}>
      <>
        <H3 center>-Снаряжение-</H3>
        <Header>
          <p>Снаряжение 32/56</p>
          <p>
            Стиль <EquipmentStyle>Нет</EquipmentStyle>
          </p>
        </Header>
        <EquipmentBody>
          <List
            data={equipments}
            renderRow={(equipment) => (
              <EquipmentItem key={equipment.type} isEmpty={!equipment.equip}>
                <Icon
                  icon={spriteIcon.indexes.equipment[equipment.type]}
                  type="equipment"
                  inline
                />
                <EquipmentCount>[{equipment.count}]</EquipmentCount>
                <p>{equipment.title || equipment.placeholder}</p>
              </EquipmentItem>
            )}
          />
        </EquipmentBody>
      </>
    </ArenaTemplate>
  )
}
