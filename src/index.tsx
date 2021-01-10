import React from "react"
import ReactDOM from "react-dom"
import { useStore } from "effector-react"
import { RoutersHistoryController, routePaths } from "@lib/histories"
import { connectToWs, wsStates } from "@lib/ws"
import { App } from "./app"
import * as serviceWorker from "./serviceWorker"

connectToWs({ url: "ws://localhost:3000" })

const initialEntry = routePaths.location

function Main() {
  const isOpenedWsPipe = useStore(wsStates.$isOpenedWsPipe)

  if (!isOpenedWsPipe) {
    return null
  }

  return (
    <RoutersHistoryController initialEntries={[initialEntry]}>
      <App />
    </RoutersHistoryController>
  )
}

const root = document.querySelector("#root")

if (root) {
  ReactDOM.render(<Main />, root)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const isProd = process.env.NODE_ENV === "production"

if (isProd) {
  // @ts-ignore
  serviceWorker.register()
}
