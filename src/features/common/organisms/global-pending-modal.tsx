import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import Loader from "react-loader-spinner"
import { useStore } from "effector-react"
import { Modal } from "@mobileFight/ui/organisms"
import { $pendingModalOpened } from "../models"

export function GlobalPendingModal() {
  const t = useContext(ThemeContext)
  const pendingModalOpened = useStore($pendingModalOpened)

  if (pendingModalOpened) {
    return (
      <Modal>
        <Loader
          type="ThreeDots"
          color={t.colors.primaryDark}
          height={50}
          width={50}
        />
      </Modal>
    )
  }

  return null
}
