// @flow strict

import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter, LocationPreview, SimpleScroll } from "@features/arena"
import { List } from "@features/common"
import { Button, spriteIcon, Separator } from "@mobileFight/ui/atoms"
import locationPreview from "@assets/location.jpg"
import { useRouterHistories } from "@lib/histories"

const menuItems = [
  {
    title: "Магазин",
    to: "/market",
  },
  {
    title: "Чат",
    to: "/chat",
  },
]

const HuntingButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 96%;
  margin-left: 2%;
  margin-top: 5px;

  > button {
    width: 46%;
  }
`

const LocationsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 15px;
  justify-content: center;
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
  const { memory } = useRouterHistories()

  return (
    <ArenaTemplate footer={<ArenaFooter menuItems={menuItems} />}>
      <>
        <LocationPreview
          locationImage={locationPreview}
          locationName="Школа Воинов"
        />
        <HuntingButtonsWrapper>
          <Button
            primary
            onClick={() => {
              memory.push("hunting-list")
            }}
          >
            Охота
          </Button>
          <Button
            primary
            onClick={() => {
              memory.push("duels")
            }}
          >
            Дуэли
          </Button>
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
              <Separator w="86%" />
              <List
                data={locations}
                renderRow={(location, index) => (
                  <React.Fragment key={location}>
                    <LocationItem>
                      <LocationItemLeftIcon>
                        <spriteIcon.component
                          icon={spriteIcon.indexes.location.pointer}
                          type="location"
                        />
                      </LocationItemLeftIcon>
                      {location}
                    </LocationItem>
                    {index < locations.length - 1 && <Separator w="86%" />}
                  </React.Fragment>
                )}
              />
            </LocationBody>
          </SimpleScroll>
        </LocationsWrapper>
      </>
    </ArenaTemplate>
  )
}
