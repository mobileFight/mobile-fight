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
      "warn",
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
    "@typescript-eslint/ban-ts-comment": "warn",
    "unicorn/filename-case": "warn",
    "unicorn/regex-shorthand": "warn",
    "no-param-reassign": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
