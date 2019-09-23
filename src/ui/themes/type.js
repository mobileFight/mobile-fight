// @flow strict

export type BaseColors = {
  primary: string,
  primaryDark: string,
  primaryLight: string,
  secondary: string,
}

export type ScreenSize = {
  width: number,
}

export type Theme = {
  colors: BaseColors,
  screenSize: ScreenSize,
}
