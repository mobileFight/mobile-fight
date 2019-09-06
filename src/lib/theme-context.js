// @flow strict

import React, {
  type Node,
  useState,
  useContext,
  createContext,
  useCallback,
} from "react"
import { ThemeProvider } from "styled-components"
import { type Theme } from "../ui/themes"

export type ThemeControllerProps = {
  children: Node,
  initialTheme: string,
  themes: { [string]: Theme },
}

export type ThemeSetterContextType = (theme: string) => void

export const ThemeSetterContext = createContext<?ThemeSetterContextType>()

export function ThemeController({
  children,
  initialTheme,
  themes,
}: ThemeControllerProps) {
  const [theme, setTheme] = useState<Theme>(themes[initialTheme])

  const themeSetter = useCallback(
    (themeName: string) => {
      if (themes[themeName]) {
        setTheme(themes[themeName])
      }
    },
    [themes],
  )

  return (
    <ThemeSetterContext.Provider value={themeSetter}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSetterContext.Provider>
  )
}

export function useThemeSetter() {
  const setTheme = useContext(ThemeSetterContext)

  return setTheme
}
