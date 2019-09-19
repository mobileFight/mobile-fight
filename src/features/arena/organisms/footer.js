// @flow strict

import React from "react"
import { Footer as FooterUI, Timer } from "@mobileFight/ui/atoms"

export function ArenaFooter() {
  return <FooterUI left="left" center={<Timer />} right="right" />
}
