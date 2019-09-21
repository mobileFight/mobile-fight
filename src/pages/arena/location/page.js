// @flow strict

import React, { useState } from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter, LocationPreview, SimpleScroll } from "@features/arena"
import { Button, spriteIcon } from "@mobileFight/ui/atoms"
import locationPreview from "@assets/location.jpg"

const menuItems = [
  "Клан",
  "Магазин",
  "Банк",
  "Онлайн",
  "ТОП",
  "Друзья",
  "Почта",
]

const HuntingButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-left: 5%;
  margin-top: 5px;

  > button {
    width: 46%;
  }
`

const LocationsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 5%;
  margin-bottom: 15px;
`

const LocationItem = styled.li`
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0 5px;
`

const LocationBody = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 15px;
  flex: 1 1 auto;

  > ${LocationItem} {
    margin-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.primaryDark};
    user-select: none;
    cursor: pointer;
  }
`

const LocationItemLeftIcon = styled.div`
  margin-right: 15px;
`

const locations = [
  "Тракт",
  "Забкое Ущелье",
  "Поместьме Раввика",
  "Слободка",
  "Коллектор",
  "Верхний Город",
]

export function LocationPage() {
  const [isOpenMenu, toggleMenu] = useState(false)

  function onCloseMenu() {
    toggleMenu(false)
  }

  function onOpenMenu() {
    toggleMenu(true)
  }

  return (
    <ArenaTemplate
      footer={
        <ArenaFooter
          menuItems={menuItems}
          isOpenMenu={isOpenMenu}
          onCloseMenu={onCloseMenu}
          onOpenMenu={onOpenMenu}
        />
      }
    >
      <>
        <LocationPreview
          locationImage={locationPreview}
          locationName="Школа Воинов"
        />
        <HuntingButtonsWrapper>
          <Button primary>Охота</Button>
          <Button primary>Дуэли</Button>
        </HuntingButtonsWrapper>
        <LocationsWrapper>
          <SimpleScroll>
            <LocationBody>
              <LocationItem>
                <LocationItemLeftIcon>
                  <spriteIcon.component
                    icon={spriteIcon.indexes.location.quest}
                    type="location"
                  />
                </LocationItemLeftIcon>
                Задания
              </LocationItem>
              {locations.map((location) => (
                <LocationItem key={location}>
                  <LocationItemLeftIcon>
                    <spriteIcon.component
                      icon={spriteIcon.indexes.location.pointer}
                      type="location"
                    />
                  </LocationItemLeftIcon>
                  {location}
                </LocationItem>
              ))}
            </LocationBody>
          </SimpleScroll>
        </LocationsWrapper>
      </>
    </ArenaTemplate>
  )
}
