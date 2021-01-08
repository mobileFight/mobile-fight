import React, { useState, useContext, createContext, useCallback } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"

export type ThemeControllerProps = {
  children: React.ReactNode
  initialTheme: string
  themes: { [key: string]: DefaultTheme }
}

export type ThemeSetterContextType = (theme: string) => void

export const ThemeSetterContext = createContext<ThemeSetterContextType | null>(
  null,
)

export function ThemeController({
  children,
  initialTheme,
  themes,
}: ThemeControllerProps) {
  const [theme, setTheme] = useState<DefaultTheme>(themes[initialTheme])

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
