// @flow strict

import React from "react"
import { Footer as FooterUI, Timer, Button } from "@mobileFight/ui/atoms"
import { Modal, MenuItem, MenuWrapper } from "@mobileFight/ui/organisms"

export function ArenaFooter({
  menuItems,
  onCloseMenu,
  onOpenMenu,
  isOpenMenu,
}: {
  menuItems: Array<string>,
  onCloseMenu: () => void,
  onOpenMenu: () => void,
  isOpenMenu: boolean,
}) {
  return (
    <>
      <FooterUI
        left={
          <Button minimal onClick={onOpenMenu}>
            menu
          </Button>
        }
        center={<Timer />}
        right="right"
      />
      {isOpenMenu && (
        <Modal onOverlayClick={onCloseMenu}>
          <MenuWrapper>
            {menuItems.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuWrapper>
        </Modal>
      )}
    </>
  )
}
