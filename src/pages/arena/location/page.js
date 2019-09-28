// @flow strict

import React from "react"
import styled from "styled-components"
import { type QuestStatesType, QuestStates } from "shared-types"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter, LocationPreview, SimpleScroll } from "@features/arena"
import { List } from "@features/common"
import { Button, spriteIcon, Separator } from "@mobileFight/ui/atoms"
import locationPreview from "@assets/location.jpg"
import { useMemoryNavigator, routePaths } from "@lib/histories"
import type { StyledEmptyUI, StyledUI } from "@mobileFight/ui/styled-with-flow"

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

const LocationItem: StyledEmptyUI = styled.li`
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hovered};
  }
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

const QuestsCounter: StyledUI<{ questType: QuestStatesType }> = styled.span`
  color: ${(props) => props.theme.colors.quests[props.questType]};
`

const locations = [
  "Тракт",
  "Забкое Ущелье",
  "Поместьме Раввика",
  "Слободка",
  "Коллектор",
  "Верхний Город",
]

function renderQuestsCounter(counter: number, questType: QuestStatesType) {
  return <QuestsCounter questType={questType}>{counter}</QuestsCounter>
}

export function LocationPage() {
  const navigation = useMemoryNavigator()

  return (
    <ArenaTemplate footer={<ArenaFooter />}>
      <>
        <LocationPreview
          locationImage={locationPreview}
          locationName="Школа Воинов"
        />
        <HuntingButtonsWrapper>
          <Button
            primary
            onClick={() => {
              navigation.navigate(routePaths.HUNTING_LIST)
            }}
          >
            Охота
          </Button>
          <Button
            primary
            onClick={() => {
              navigation.navigate(routePaths.DUELS)
            }}
          >
            Дуэли
          </Button>
        </HuntingButtonsWrapper>
        <LocationsWrapper>
          <SimpleScroll>
            <LocationBody>
              <LocationItem
                onClick={() => {
                  navigation.navigate(routePaths.QUESTS)
                }}
              >
                <LocationItemLeftIcon>
                  <spriteIcon.component
                    icon={spriteIcon.indexes.location.quest}
                    type="location"
                  />
                </LocationItemLeftIcon>
                Задания ({renderQuestsCounter(1, QuestStates.active)}/
                {renderQuestsCounter(2, QuestStates.available)}/
                {renderQuestsCounter(0, QuestStates.completed)})
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
