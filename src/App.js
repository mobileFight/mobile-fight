import React from "react"
import { Router } from "react-router"
import { Normalize } from "styled-normalize"
import { useRouterHistories } from "./lib/histories"
import { ThemeController } from "./lib/theme-context"
import { lightTheme } from "./ui/themes"
import { routes } from "./pages"

export function App() {
  const { browser } = useRouterHistories()

  return (
    <>
      <Normalize />
      <ThemeController lightTheme={lightTheme} initialTheme="lightTheme">
        <Router history={browser}>{routes}</Router>
      </ThemeController>
    </>
  )
}
