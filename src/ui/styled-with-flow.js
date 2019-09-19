// @flow strict

import { type StyledComponent } from "styled-components"
import { type Theme } from "./themes/type"

export type StyledUI<Props> = StyledComponent<Props, Theme, *>
export type StyledEmptyUI = StyledUI<*>
