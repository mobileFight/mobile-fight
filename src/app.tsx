import React from "react"
import { Router } from "react-router"
import { Normalize } from "styled-normalize"
import { useRouterHistories } from "@lib/histories"
import { ThemeController } from "@lib/theme-context"
import { lightTheme } from "@mobileFight/ui/themes"
import { ModalRootProvider } from "@mobileFight/ui/organisms"
import { routes } from "./pages"
import { GlobalStyles } from "./global-styles"

const initialThemes = { lightTheme }

export function App() {
  const { memory } = useRouterHistories()

  return (
    <ThemeController themes={initialThemes} initialTheme="lightTheme">
      <ModalRootProvider>
        <>
          <Normalize />
          <GlobalStyles />
          <Router history={memory}>{routes}</Router>
        </>
      </ModalRootProvider>
    </ThemeController>
  )
}
