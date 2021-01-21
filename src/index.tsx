import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { useStore } from "effector-react"
import { Normalize } from "styled-normalize"
import { RoutersHistoryController, routePaths } from "@lib/histories"
import { connectToWs, wsStates } from "@lib/ws"
import { App } from "./app"
import { GlobalPendingModal } from "./features/common"
import { Splash, ModalRootProvider } from "./ui/organisms"
import { lightTheme } from "./ui/themes"
import { ThemeController } from "./lib/theme-context"
import * as serviceWorker from "./serviceWorker"
import { GlobalStyles } from "./global-styles"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const initialEntry = routePaths.location
const initialThemes = { lightTheme }

function Main() {
  const isOpenedWsPipe = useStore(wsStates.$isOpenedWsPipe)

  useEffect(() => {
    connectToWs({ url: "ws://localhost:3000" })
  }, [])

  if (false) {
    return <Splash />
  }

  return (
    <RoutersHistoryController initialEntries={[initialEntry]}>
      <App />
    </RoutersHistoryController>
  )
}

const root = document.querySelector("#root")

if (root) {
  ReactDOM.render(
    <ThemeController themes={initialThemes} initialTheme="lightTheme">
      <ModalRootProvider>
        <>
          <GlobalPendingModal />
          <Normalize />
          <GlobalStyles />
          <Main />
        </>
      </ModalRootProvider>
    </ThemeController>,
    root,
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const isProd = process.env.NODE_ENV === "production"

if (isProd) {
  // @ts-ignore
  serviceWorker.register()
}
