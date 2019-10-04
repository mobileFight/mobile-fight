// @flow strict

import React, { type Node, createContext, useMemo, useContext } from "react"
import {
  type MemoryHistory,
  type BrowserHistory,
  createMemoryHistory,
  createBrowserHistory,
} from "history"
import {
  useCustomNavigationBehaviors,
  commonBehaviors,
} from "./custom-navigation-behavior"

export type HistoryContext = {
  browser: BrowserHistory,
  memory: MemoryHistory,
}

export const RoutersHistoryContext = createContext<HistoryContext>({})

export const routePaths = {
  LOCATION: "/",
  CHAT: "/chat",
  HUNTING_LIST: "/hunting-list",
  DUELS: "/duels",
  MARKET: "/market",
  PRODUCTS: "/products",
  EQUIPMENT: "/equipment",
  QUESTS: "/quests-list",
}

export function useRouterHistories() {
  const histories = useContext(RoutersHistoryContext)

  return histories
}

export function useMemoryLocation() {
  const { memory } = useRouterHistories()

  return memory.location
}

export function useMemoryNavigator() {
  const { memory } = useRouterHistories()
  const location = useMemoryLocation()
  const behaviors = useCustomNavigationBehaviors()

  const navigate = (path: string) => {
    const nextPageAlreadyOpen = location.pathname === path
    const behavior = behaviors[path] || commonBehaviors

    if (!nextPageAlreadyOpen) {
      behavior.onEnter(memory, path)

      console.log("[useMemoryNavigator] - push", { memory })
    }
  }

  const pop = () => {
    const behavior = behaviors[location.pathname] || commonBehaviors

    behavior.onLeave(memory)

    console.log("[useMemoryNavigator] - pop", { memory })
  }

  const toRootPage = () => {
    memory.go(-1 * memory.length)

    console.log("[useMemoryNavigator] - toRootPage", { memory })
  }

  return {
    navigate,
    pop,
    toRootPage,
  }
}

export function RoutersHistoryController({
  children,
  initialEntries = [],
  initialIndex = 0,
}: {
  children: Node,
  initialEntries?: Array<string>,
  initialIndex?: number,
}) {
  const histories = useMemo(
    () => ({
      browser: createBrowserHistory(),
      memory: createMemoryHistory({
        initialEntries: [...initialEntries],
        initialIndex,
      }),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <RoutersHistoryContext.Provider value={histories}>
      {children}
    </RoutersHistoryContext.Provider>
  )
}
