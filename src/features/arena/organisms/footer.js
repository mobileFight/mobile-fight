// @flow strict

import React, { useState } from "react"
import { Footer as FooterUI, Timer, Button } from "@mobileFight/ui/atoms"
import { Modal, MenuItem, MenuWrapper } from "@mobileFight/ui/organisms"
import { useRouterHistories } from "@lib/histories"

export function ArenaFooter({
  menuItems,
  isNested,
}: {
  menuItems: Array<{ title: string, to: string }>,
  isNested?: boolean,
}) {
  const { memory } = useRouterHistories()
  const [isOpenMenu, toggleMenu] = useState(false)

  function onCloseMenu() {
    toggleMenu(false)
  }

  function onOpenMenu() {
    toggleMenu(true)
  }

  function goBack() {
    memory.goBack()
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
                  memory.push(item.to)
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
