import { createEvent } from "effector"

export const receivedWsEvent = createEvent<unknown>()
export const wsOpened = createEvent<void>()
export const wsClosed = createEvent<void>()
export const wsFailed = createEvent<Error>()
export const connectToWs = createEvent<{ url: string }>()
