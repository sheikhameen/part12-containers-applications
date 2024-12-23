/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    eqeqeq: "error",
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": 0,
    "no-console": "error",
    "no-trailing-spaces": "error",
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
