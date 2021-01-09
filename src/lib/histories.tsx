import React, { createContext, useMemo, useContext } from "react"
import { MemoryHistory, createMemoryHistory } from "history"
import {
  useCustomNavigationBehaviors,
  commonBehaviors,
} from "./custom-navigation-behavior"

export type HistoryContext = {
  memory: MemoryHistory
}

// @ts-ignore
export const RoutersHistoryContext = createContext<HistoryContext>({})

export const routePaths = {
  location: "/",
  chat: "/chat",
  hunting_list: "/hunting-list",
  duels: "/duels",
  market: "/market",
  products: "/products",
  equipment: "/equipment",
  quests: "/quests-list",
  auth: {
    login: "/join/login",
    registtation: "/join/registtation",
  },
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

type Props = {
  children: React.ReactNode
  initialEntries?: Array<string>
  initialIndex?: number
}

export function RoutersHistoryController({
  children,
  initialEntries = [],
  initialIndex = 0,
}: Props) {
  const histories = useMemo(
    () => ({
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
