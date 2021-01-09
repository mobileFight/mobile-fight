import React, { createContext, useContext } from "react"
import { MemoryHistory } from "history"

export const commonBehaviors = {
  onLeave: (memory: MemoryHistory) => {
    memory.goBack()
  },
  onEnter: (memory: MemoryHistory, path: string) => {
    const { entries } = memory
    // TODO: update history typings

    const existsIndex = entries.findIndex((entry) => entry.pathname === path)
    const isNestedRoute = memory.index > existsIndex

    if (existsIndex !== -1 && isNestedRoute) {
      memory.go(-1 * entries.length + existsIndex + 1)
      return
    }

    memory.push(path)
  },
}

export type NavigationBehaviorContextType = {
  [key: string]: {
    onLeave: (memory: MemoryHistory) => void
    onEnter: (memory: MemoryHistory, nextPath: string) => void
  }
}

export const CustomNavigationBehaviorContext = createContext<NavigationBehaviorContextType>(
  {},
)

export function CustomNavigationBehaviorProvider({
  children,
  behaviors,
}: {
  children: React.ReactNode
  behaviors: NavigationBehaviorContextType
}) {
  return (
    <CustomNavigationBehaviorContext.Provider value={behaviors}>
      {children}
    </CustomNavigationBehaviorContext.Provider>
  )
}

export function useCustomNavigationBehaviors() {
  const behaviors = useContext(CustomNavigationBehaviorContext)

  return behaviors
}

export function combineBehaviors(
  behaviors: Array<NavigationBehaviorContextType>,
): NavigationBehaviorContextType {
  return behaviors.reduce((acc, behavior) => {
    return {
      ...acc,
      ...behavior,
    }
  }, {})
}
