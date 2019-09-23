// @flow strict

import React from "react"
import { Footer as FooterUI, Timer, Button } from "@mobileFight/ui/atoms"
import { Modal, MenuItem, MenuWrapper } from "@mobileFight/ui/organisms"
import { useRouterHistories } from "@lib/histories"

export function ArenaFooter({
  menuItems,
  onCloseMenu,
  onOpenMenu,
  isOpenMenu,
}: {
  menuItems: Array<{ title: string, to: string }>,
  onCloseMenu: () => void,
  onOpenMenu: () => void,
  isOpenMenu: boolean,
}) {
  const { memory } = useRouterHistories()

  return (
    <>
      <FooterUI
        left={
          <Button minimal onClick={onOpenMenu}>
            меню
          </Button>
        }
        center={<Timer />}
        right="выход"
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
