import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { List } from "@features/common"
import { H3, Button as ButtonUI } from "@mobileFight/ui/atoms"
import { useRouterHistories, routePaths } from "@lib/histories"

const slots = ["Оружие", "Броня", "Зелья и Свитки"]

const Button = styled(ButtonUI)`
  margin-bottom: 2px;
  align-self: center;
`

export function MarketPage() {
  const { memory } = useRouterHistories()

  return (
    <ArenaTemplate footer={<ArenaFooter isNested />}>
      <>
        <H3 center>-Магазин-</H3>
        <List
          extracKey={(it) => it}
          data={slots}
          renderRow={(slot) => (
            <Button
              primary
              onClick={() => {
                memory.push(routePaths.products, { title: slot })
              }}
            >
              {slot}
            </Button>
          )}
        />
      </>
    </ArenaTemplate>
  )
}
