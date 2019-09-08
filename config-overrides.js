const path = require("path")

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    ...config.resolve,
    alias: {
      "@mobileFight/ui": path.resolve(__dirname, "src/ui/"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  }

  return config
}
