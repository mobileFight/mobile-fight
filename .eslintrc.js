module.exports = {
  plugins: ["react-hooks", "@typescript-eslint"],
  extends: [
    "plugin:jest/recommended",
    "@atomix/react",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",
  rules: {
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: false,
      },
    ],
    quotes: "off",
    "react/sort-comp": "off",
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-wrap-multilines": "off",
    "import/extensions": "off",
  },
}
