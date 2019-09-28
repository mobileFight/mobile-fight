// @flow strict

import React from "react"
import { Route, Router } from "react-router"
import { useRouterHistories, routePaths } from "@lib/histories"
import {
  CustomNavigationBehaviorProvider,
  combineBehaviors,
} from "@lib/custom-navigation-behavior"
import { LoginPage } from "./join/login/page"
import { LocationPage } from "./arena/location/page"
import { HuntingListPage } from "./arena/hunting/page"
import { DuelPage } from "./arena/duel/page"
import { MarketPage } from "./arena/market/page"
import { ProductsPage } from "./arena/market/products/page"
import { HeroEquipmentPage } from "./arena/equipment/page"
import { QuestsListPage } from "./arena/quests-list/page"
import { ChatPage } from "./chat/page"

export function ArenaRouter() {
  const { memory } = useRouterHistories()

  return (
    <>
      {/* $FlowFixMe */}
      <Router history={memory}>
        <Route component={LocationPage} path="/" exact />
        <Route component={ChatPage} path={routePaths.CHAT} />
        <Route component={HuntingListPage} path={routePaths.HUNTING_LIST} />
        <Route component={DuelPage} path={routePaths.DUELS} />
        <Route component={MarketPage} path={routePaths.MARKET} />
        <Route component={ProductsPage} path={routePaths.PRODUCTS} />
        <Route component={HeroEquipmentPage} path={routePaths.EQUIPMENT} />
        <Route component={QuestsListPage} path={routePaths.QUESTS} />
      </Router>
    </>
  )
}

const behaviors = combineBehaviors([])

export const routes = (
  <CustomNavigationBehaviorProvider behaviors={behaviors}>
    <Route component={LoginPage} path="/join/login" />
    <Route component={ArenaRouter} />
  </CustomNavigationBehaviorProvider>
)
