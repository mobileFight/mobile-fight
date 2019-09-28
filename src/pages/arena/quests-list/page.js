// @flow strict

import React from "react"
import styled from "styled-components"
import { type QuestStatesType, QuestStates } from "shared-types"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { List } from "@features/common"
import { Separator, H3 } from "@mobileFight/ui/atoms"
import type { StyledUI } from "@mobileFight/ui/styled-with-flow"

const QuestsWrapper = styled.div`
  margin: 15px 0;
`

const QuestTypeTitle: StyledUI<{ questType: QuestStatesType }> = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.quests[props.questType]};

  &:not(:first-child) {
    margin-top: 20px;
  }
`

const QuestTitle: StyledUI<{ questType: QuestStatesType }> = styled.p`
  padding: 0;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.quests[props.questType]};
`

const active = ["Козенное имущество", "Наглые воришки"]

function renderQuest(questType: QuestStatesType) {
  return (quest: string) => (
    <React.Fragment key={quest}>
      <QuestTitle questType={questType}>{quest}</QuestTitle>
      <Separator w="100%" />
    </React.Fragment>
  )
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
          <List data={active} renderRow={renderQuest(QuestStates.active)} />
          <QuestTypeTitle questType={QuestStates.available}>
            Доступные
          </QuestTypeTitle>
          <List data={active} renderRow={renderQuest(QuestStates.available)} />
          <QuestTypeTitle questType={QuestStates.completed}>
            Завершенные
          </QuestTypeTitle>
          <List data={active} renderRow={renderQuest(QuestStates.completed)} />
        </QuestsWrapper>
      </>
    </ArenaTemplate>
  )
}
