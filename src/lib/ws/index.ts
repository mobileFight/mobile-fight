/* eslint-disable unicorn/prefer-add-event-listener */

import { initSocket } from "./init"

export const [wsStates, socketClient] = initSocket()

export * from "./events"
