import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      primaryLight: string
      secondary: string
      secondaryLight: string
      third: string
      hovered: string
      quests: Record<string, string>
    }

    screenSize: {
      width: number
    }
  }
}
