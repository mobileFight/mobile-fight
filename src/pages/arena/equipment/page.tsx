import React from "react"
import styled, { css } from "styled-components"
import { EquipmentsScheme } from "shared-types"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { H3, spriteIcon } from "@mobileFight/ui/atoms"
import { List } from "@features/common"
import { ifProp } from "@lib/styled-component-layout"

const equipments = [
  {
    isEquipped: true,
    placeholder: "Оружие",
    type: EquipmentsScheme.weapon,
    info: {
      title: "Крепкая дубина",
      count: "7",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.shield,
    placeholder: "Щит",
    info: {
      title: "Круглый щит",
      count: "4",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.helmet,
    placeholder: "Шлем",
    info: {
      title: "Шлем Витаса",
      count: "1",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.bracer,
    placeholder: "Наручи",
    info: {
      title: "Поручни Гладиолуса",
      count: "4",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.armor,
    placeholder: "Броня",
    info: {
      title: "Кольца Витаса",
      count: "4",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.footwear,
    placeholder: "Поножи",
    info: {
      title: "Шлепанцы Гладиолуса",
      count: "1",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.suspension,
    placeholder: "Амулет",
    info: {
      title: "Подвеска Стажника",
      count: "1",
    },
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.ring,
    placeholder: "Кольца",
    info: {
      title: "Бронекольцо",
      count: "1",
    },
  },
  {
    isEquipped: false,
    type: EquipmentsScheme.belt,
    placeholder: "Пояс",
  },
  {
    isEquipped: true,
    type: EquipmentsScheme.quests,
    info: {
      count: "5",
      title: "Для заданий",
    },
  },
]

const EquipmentItem = styled.li<{ isEmpty?: boolean }>`
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
    <ArenaTemplate footer={<ArenaFooter isNested />}>
      <>
        <H3 center>-Снаряжение-</H3>
        <Header>
          <p>Снаряжение: 32/56</p>
          <p>
            Стиль: <EquipmentStyle>Нет</EquipmentStyle>
          </p>
        </Header>
        <EquipmentBody>
          <List
            extracKey={(it) => it.type.toString()}
            data={equipments}
            renderRow={(equipment) => (
              <EquipmentItem isEmpty={!equipment.isEquipped}>
                <Icon
                  icon={spriteIcon.indexes.equipment[equipment.type]}
                  type="equipment"
                  inline
                />
                <EquipmentCount>{equipment?.info?.count || 0}</EquipmentCount>
                <p>
                  {equipment.isEquipped
                    ? // @ts-ignore
                      equipment.info.title
                    : equipment.placeholder}
                </p>
              </EquipmentItem>
            )}
          />
        </EquipmentBody>
      </>
    </ArenaTemplate>
  )
}
