// @flow strict

import React from "react"
import { Route, Router } from "react-router"
import { useRouterHistories } from "@lib/histories"
import { LoginPage } from "./join/login/page"
import { LocationPage } from "./arena/location/page"
import { HuntingListPage } from "./arena/hunting/page"
import { DuelPage } from "./arena/duel/page"
import { ChatPage } from "./chat/page"

export function ArenaRouter() {
  const { memory } = useRouterHistories()

  return (
    <>
      {/* $FlowFixMe */}
      <Router history={memory}>
        <Route component={LocationPage} path="/" exact />
        <Route component={ChatPage} path="/chat" exact />
        <Route component={HuntingListPage} path="/hunting-list" exact />
        <Route component={DuelPage} path="/duels" exact />
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
