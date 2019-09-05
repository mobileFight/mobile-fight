import React, { useState, useContext, useMemo } from "react"
import { ThemeContext } from "styled-components"

export function ThemeController({ children, initialTheme, ...themes }) {
  const [theme, setTheme] = useState(themes[initialTheme])
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeSetter() {
  const { setTheme } = useContext(ThemeContext)

  return setTheme
}
