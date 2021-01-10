import { createEffect, forward, restore } from "effector"
import { createGate } from "effector-react"
import { getLocation } from "@features/arena"

export const gate = createGate<number>()

export const loadLocationFx = createEffect<number, unknown>().use(getLocation)

export const $location = restore(loadLocationFx.doneData, null)

forward({ from: gate.open, to: loadLocationFx })
