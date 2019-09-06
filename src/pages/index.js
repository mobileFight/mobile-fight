// @flow strict

import React from "react"
import { Route, Router } from "react-router"
import { useRouterHistories } from "../lib/histories"
import { MainTemplate } from "../ui/templates"
import { LoginPage } from "./join/login/page"
import { LocationPage } from "./arena/location/page"

export function ArenaRouter() {
  const { memory } = useRouterHistories()

  return (
    <MainTemplate>
      {/* $FlowFixMe */}
      <Router history={memory}>
        <Route component={LocationPage} />
      </Router>
    </MainTemplate>
  )
}

export const routes = (
  <>
    <Route component={LoginPage} path="/join/login" />
    <Route component={ArenaRouter} />
  </>
)
