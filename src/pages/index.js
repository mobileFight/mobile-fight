// @flow strict

import React from "react"
import { Route, Router } from "react-router"
import { useRouterHistories } from "@lib/histories"
import { LoginPage } from "./join/login/page"
import { LocationPage } from "./arena/location/page"
import { HuntingListPage } from "./arena/hunting/page"
import { DuelPage } from "./arena/duel/page"
import { MarketPage } from "./arena/market/page"
import { ProductsPage } from "./arena/market/products/page"
import { HeroEquipmentPage } from "./arena/equipment/page"
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
        <Route component={MarketPage} path="/market" exact />
        <Route component={ProductsPage} path="/products" exact />
        <Route component={HeroEquipmentPage} path="/equipment" exact />
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
