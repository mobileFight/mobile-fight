// @flow strict

import React, { useState } from "react"
import { Footer as FooterUI, Timer, Button } from "@mobileFight/ui/atoms"
import { Modal, MenuItem, MenuWrapper } from "@mobileFight/ui/organisms"
import { useMemoryNavigator, routePaths } from "@lib/histories"

const defaultItems = [
  {
    title: "Магазин",
    to: routePaths.MARKET,
  },
  {
    title: "Чат",
    to: routePaths.CHAT,
  },
  {
    title: "Снаряжение",
    to: routePaths.EQUIPMENT,
  },
]

export function ArenaFooter({
  menuItems = defaultItems,
  isNested,
}: {
  menuItems?: Array<{ title: string, to: string }>,
  isNested?: boolean,
}) {
  const navigator = useMemoryNavigator()
  const [isOpenMenu, toggleMenu] = useState(false)

  function onCloseMenu() {
    toggleMenu(false)
  }

  function onOpenMenu() {
    toggleMenu(true)
  }

  function goBack() {
    navigator.pop()
  }

  return (
    <>
      <FooterUI
        left={
          <Button minimal onClick={onOpenMenu}>
            Меню
          </Button>
        }
        center={<Timer />}
        right={
          isNested ? (
            <Button minimal onClick={goBack}>
              Назад
            </Button>
          ) : (
            "Выход"
          )
        }
      />
      {isOpenMenu && (
        <Modal onOverlayClick={onCloseMenu}>
          <MenuWrapper>
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                onClick={() => {
                  navigator.navigate(item.to)
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </MenuWrapper>
        </Modal>
      )}
    </>
  )
}
