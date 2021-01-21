import { createEvent, createStore } from "effector"

export const openPendingModal = createEvent()
export const closePendingModal = createEvent()

export const $pendingModalOpened = createStore(false)
  .on(openPendingModal, () => true)
  .on(closePendingModal, () => false)
