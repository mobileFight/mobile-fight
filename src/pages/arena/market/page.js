// @flow strict

import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter } from "@features/arena"
import { H3, Button as ButtonUI } from "@mobileFight/ui/atoms"
import { useRouterHistories } from "@lib/histories"

const menuItems = [
  {
    title: "Чат",
    to: "/chat",
  },
]

const slots = ["Оружие", "Броня", "Зелья и Свитки"]

const Button = styled(ButtonUI)`
  margin-bottom: 2px;
  align-self: center;
`

export function MarketPage() {
  const { memory } = useRouterHistories()

  return (
    <ArenaTemplate footer={<ArenaFooter menuItems={menuItems} isNested />}>
      <>
        <H3 center>-Магазин-</H3>
        {slots.map((slot) => (
          <Button
            primary
            key={slot}
            onClick={() => {
              memory.push("products", { title: slot })
            }}
          >
            {slot}
          </Button>
        ))}
      </>
    </ArenaTemplate>
  )
}
