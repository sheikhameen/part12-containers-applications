import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["build/"] },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  { languageOptions: { globals: { ...globals.node, ...globals.jest } } },
  pluginJs.configs.recommended,
];
