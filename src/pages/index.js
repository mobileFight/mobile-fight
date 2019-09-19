// @flow strict

import React from "react"
import { Route, Router } from "react-router"
import { useRouterHistories } from "@lib/histories"
import { LoginPage } from "./join/login/page"
import { LocationPage } from "./arena/location/page"

export function ArenaRouter() {
  const { memory } = useRouterHistories()

  return (
    <>
      {/* $FlowFixMe */}
      <Router history={memory}>
        <Route component={LocationPage} />
      </Router>
    </>
  )
}

export const routes = (
  <>
    <Route component={LoginPage} path="/join/login" />
    <Route component={ArenaRouter} />
  </>
)
