// @flow strict

import React from "react"
import { Router } from "react-router"
import { Normalize } from "styled-normalize"
import { useRouterHistories } from "@lib/histories"
import { ThemeController } from "@lib/theme-context"
import { lightTheme } from "@mobileFight/ui/themes"
import { ModalRootProvider } from "@mobileFight/ui/organisms"
import { routes } from "./pages"
import { GlobalStyles } from "./global-styles"

export function App() {
  const { browser } = useRouterHistories()

  return (
    <ThemeController themes={{ lightTheme }} initialTheme="lightTheme">
      <ModalRootProvider>
        <>
          <Normalize />
          <GlobalStyles />
          {/* $FlowFixMe */}
          <Router history={browser}>{routes}</Router>
        </>
      </ModalRootProvider>
    </ThemeController>
  )
}
