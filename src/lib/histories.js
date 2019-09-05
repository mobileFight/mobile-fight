import React, { createContext, useMemo, useContext } from "react"
import { createMemoryHistory, createBrowserHistory } from "history"

export const RoutersHistoryContext = createContext()

export function useRouterHistories() {
  const histories = useContext(RoutersHistoryContext)

  return histories
}

export function RoutersHistoryController({ children }) {
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
