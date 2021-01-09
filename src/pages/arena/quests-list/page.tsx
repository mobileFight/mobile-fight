import React from "react"
import styled from "styled-components"
import { QuestStates } from "shared-types"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { List } from "@features/common"
import { Separator, H3 } from "@mobileFight/ui/atoms"

const QuestsWrapper = styled.div`
  margin: 15px 0;
`

const QuestTypeTitle = styled.h3<{ questType: QuestStates }>`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.quests[props.questType]};

  &:not(:first-child) {
    margin-top: 20px;
  }
`

const QuestTitle = styled.p<{ questType: QuestStates }>`
  padding: 0;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.quests[props.questType]};
`

const active = ["Козенное имущество", "Наглые воришки"]

function renderQuest(questType: QuestStates) {
  return (quest: string) => (
    <React.Fragment key={quest}>
      <QuestTitle questType={questType}>{quest}</QuestTitle>
      <Separator w="100%" />
    </React.Fragment>
  )
}

function keyExtractor(it: string) {
  return it
}

export function QuestsListPage() {
  return (
    <ArenaTemplate footer={<ArenaFooter menuItems={[]} isNested />}>
      <>
        <H3 center>-Задания-</H3>
        <QuestsWrapper>
          <QuestTypeTitle questType={QuestStates.active}>
            Активные
          </QuestTypeTitle>
          <List
            extracKey={keyExtractor}
            data={active}
            renderRow={renderQuest(QuestStates.active)}
          />
          <QuestTypeTitle questType={QuestStates.available}>
            Доступные
          </QuestTypeTitle>
          <List
            extracKey={keyExtractor}
            data={active}
            renderRow={renderQuest(QuestStates.available)}
          />
          <QuestTypeTitle questType={QuestStates.completed}>
            Завершенные
          </QuestTypeTitle>
          <List
            extracKey={keyExtractor}
            data={active}
            renderRow={renderQuest(QuestStates.completed)}
          />
        </QuestsWrapper>
      </>
    </ArenaTemplate>
  )
}
