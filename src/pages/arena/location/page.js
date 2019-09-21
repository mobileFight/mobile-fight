// @flow strict

import React, { useState } from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter, LocationPreview, SimpleScroll } from "@features/arena"
import { Button } from "@mobileFight/ui/atoms"
import location from "@assets/location.jpg"

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
`

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
        <LocationPreview locationImage={location} locationName="Школа Воинов" />
        <HuntingButtonsWrapper>
          <Button primary>Охота</Button>
          <Button primary>Дуэли</Button>
        </HuntingButtonsWrapper>
        <LocationsWrapper>
          <SimpleScroll />
        </LocationsWrapper>
      </>
    </ArenaTemplate>
  )
}
