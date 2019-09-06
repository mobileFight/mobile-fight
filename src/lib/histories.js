// @flow strict

import React, { type Node, createContext, useMemo, useContext } from "react"
import {
  type MemoryHistory,
  type BrowserHistory,
  createMemoryHistory,
  createBrowserHistory,
} from "history"

export type HistoryContext = {
  browser: BrowserHistory,
  memory: MemoryHistory,
}

export const RoutersHistoryContext = createContext<HistoryContext>({})

export function useRouterHistories() {
  const histories = useContext(RoutersHistoryContext)

  return histories
}

export function RoutersHistoryController({ children }: { children: Node }) {
  const histories = useMemo(
    () => ({ browser: createBrowserHistory(), memory: createMemoryHistory() }),
    [],
  )

  return (
    <RoutersHistoryContext.Provider value={histories}>
      {children}
    </RoutersHistoryContext.Provider>
  )
}
