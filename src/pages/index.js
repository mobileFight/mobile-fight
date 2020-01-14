// @flow strict

import React from "react"
import { Route } from "react-router"
import { routePaths } from "@lib/histories"
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

export const ArenaRoutes = () => {
  const isAuth = true

  if (isAuth) {
    return (
      <>
        <Route component={LocationPage} path={routePaths.location} exact />
        <Route component={ChatPage} path={routePaths.chat} />
        <Route component={HuntingListPage} path={routePaths.hunting_list} />
        <Route component={DuelPage} path={routePaths.duels} />
        <Route component={MarketPage} path={routePaths.market} />
        <Route component={ProductsPage} path={routePaths.products} />
        <Route component={HeroEquipmentPage} path={routePaths.equipment} />
        <Route component={QuestsListPage} path={routePaths.quests} />
      </>
    )
  }

  return null
}

const behaviors = combineBehaviors([])

export const routes = (
  <CustomNavigationBehaviorProvider behaviors={behaviors}>
    <Route component={LoginPage} path={routePaths.auth.login} />
    <ArenaRoutes />
  </CustomNavigationBehaviorProvider>
)
