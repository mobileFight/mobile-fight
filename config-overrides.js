const path = require("path")
// eslint-disable-next-line import/no-extraneous-dependencies
const { useBabelRc, addWebpackAlias, override } = require("customize-cra")

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@mobileFight/ui": path.resolve(__dirname, "src/ui/"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@features": path.resolve(__dirname, "src/features"),
  }),
)
