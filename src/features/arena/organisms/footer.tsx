import React, { useState } from "react"
import { Footer as FooterUI, Timer, Button } from "@mobileFight/ui/atoms"
import { Modal, MenuItem, MenuWrapper } from "@mobileFight/ui/organisms"
import { useMemoryNavigator, routePaths } from "@lib/histories"

const defaultItems = [
  {
    title: "Магазин",
    to: routePaths.market,
  },
  {
    title: "Чат",
    to: routePaths.chat,
  },
  {
    title: "Снаряжение",
    to: routePaths.equipment,
  },
]

type Props = {
  menuItems?: Array<{ title: string; to: string }>
  isNested?: boolean
}

export function ArenaFooter({ menuItems = defaultItems, isNested }: Props) {
  const navigator = useMemoryNavigator()
  const [isOpenMenu, toggleMenu] = useState(false)
  const hasItems = menuItems.length > 0

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
          hasItems && (
            <Button minimal onClick={onOpenMenu}>
              Меню
            </Button>
          )
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
