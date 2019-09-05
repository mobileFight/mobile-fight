import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app"
import { RoutersHistoryController } from "./lib/histories"
import * as serviceWorker from "./serviceWorker"

const app = (
  <RoutersHistoryController>
    <App />
  </RoutersHistoryController>
)

ReactDOM.render(app, document.querySelector("#root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const isProd = process.env.NODE_ENV === "production"

if (isProd) {
  serviceWorker.register()
}
