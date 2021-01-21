import { QuestStates } from "shared-types"
import { DefaultTheme } from "styled-components"

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#c9a570",
    primaryDark: "#633300",
    primaryLight: "#c4ae7f",
    secondary: "#ff6700",
    secondaryLight: "#ff9a00",
    third: "#693401",
    hovered: "#ddca9f",
    quests: {
      [QuestStates.active]: "#CB2025",
      [QuestStates.available]: "#000",
      [QuestStates.completed]: "#008000",
    },
  },
  screenSize: { width: 480 },
}
