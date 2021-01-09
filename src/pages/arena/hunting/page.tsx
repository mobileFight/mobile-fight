import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { ArenaFooter, SimpleScroll } from "@features/arena"
import { List } from "@features/common"
import { H3, Separator, Button } from "@mobileFight/ui/atoms"
import mobPreview1 from "@assets/hunting-preview/1.png"
import mobPreview2 from "@assets/hunting-preview/2.png"

const mobs = [
  { title: "Гребняк", lvl: 2, img: mobPreview1 },
  { title: "Разбойник", lvl: 4, img: mobPreview2 },
]

const MobsList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0 15px;
  flex: 1 1 auto;
`

const MobItem = styled.li`
  color: black;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  > img {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`

const CurrentFights = styled(Button)`
  margin-top: 15px;
  align-self: center;
`

export function HuntingListPage() {
  return (
    <ArenaTemplate footer={<ArenaFooter isNested />}>
      <>
        <H3 center>-Охота-</H3>
        <SimpleScroll>
          <MobsList>
            <List
              data={mobs}
              extracKey={(it) => it.title}
              renderRow={(mob, index) => (
                <>
                  <MobItem>
                    <img src={mob.img} alt="preview" />
                    {mob.title} [{mob.lvl}]
                  </MobItem>
                  {index < mobs.length - 1 && <Separator w="86%" />}
                </>
              )}
            />
          </MobsList>
        </SimpleScroll>
        <CurrentFights primary>Текущие бои</CurrentFights>
      </>
    </ArenaTemplate>
  )
}
