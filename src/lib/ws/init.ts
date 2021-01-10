/* eslint-disable unicorn/prefer-add-event-listener */

import {
  Store,
  merge,
  forward,
  restore,
  createStore,
  createEffect,
} from "effector"
import { WSClient } from "./client"
import { connectToWs, wsOpened, wsFailed, wsClosed } from "./events"

type Result = [
  {
    $isOpenedWsPipe: Store<boolean>
    $isPendingWsPipe: Store<boolean>
    $isFailedWsPipe: Store<boolean>
  },
  WSClient,
]

export function initSocket(): Result {
  const socketClient = new WSClient()

  const socketConnectionFx = createEffect<string, void, Error>().use(
    async (url) => {
      await socketClient.tryConnect(url)
    },
  )

  const $isOpenedWsPipe: Store<boolean> = createStore(false)
    .on(wsOpened, () => true)
    .on(merge([wsFailed, wsClosed]), () => false)

  const $isFailedWsPipe: Store<boolean> = createStore(false)
    .on(wsOpened, () => false)
    .on(wsFailed, () => true)

  const $isPendingWsPipe: Store<boolean> = createStore(false)
    .on(wsOpened, () => false)
    .on(socketConnectionFx, () => true)

  const $lastConnection = restore<{ url: string }>(connectToWs, { url: "" })

  forward({
    from: connectToWs,
    to: socketConnectionFx.prepend((params) => params.url),
  })

  forward({
    from: socketConnectionFx.done,
    to: wsOpened,
  })

  // forward({
  //   from: wsFailed,
  //   to: timeoutToSmoothReconnect,
  // })

  // guard({
  //   source: sample($lastConnection, timeoutToSmoothReconnect.done),
  //   filter: (it: { url: string }) => !!it.url,
  //   target: socketConnectionFx.prepend((params: { url: string }) => params.url),
  // })

  return [
    {
      $isOpenedWsPipe,
      $isPendingWsPipe,
      $isFailedWsPipe,
    },
    socketClient,
  ]
}
