import React from "react"
import { Router } from "react-router"
import { useRouterHistories } from "@lib/histories"
import { routes } from "./pages"

export function App() {
  const { memory } = useRouterHistories()

  return <Router history={memory}>{routes}</Router>
}
