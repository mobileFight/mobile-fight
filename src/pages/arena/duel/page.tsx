import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { List } from "@features/common"
import { H3, Button as ButtonUI } from "@mobileFight/ui/atoms"

const duels = ["Начать поединок", "Открытый бой", "Текущие бои"]

const Button = styled(ButtonUI)`
  margin-bottom: 2px;
  align-self: center;
`

export function DuelPage() {
  return (
    <ArenaTemplate footer={<ArenaFooter isNested />}>
      <>
        <H3 center>-Дуэли-</H3>
        <List
          extracKey={(it) => it}
          data={duels}
          renderRow={(duel) => (
            <Button primary key={duel}>
              {duel}
            </Button>
          )}
        />
      </>
    </ArenaTemplate>
  )
}
