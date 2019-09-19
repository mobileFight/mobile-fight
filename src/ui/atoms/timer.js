// @flow strict

import { useState, useEffect } from "react"
import moment from "moment"

function formatTime() {
  return moment().format("H:mm")
}

const interval = 60 * 1000

export function Timer() {
  const [time, setTime] = useState(formatTime())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(formatTime())
    }, interval)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return time
}
