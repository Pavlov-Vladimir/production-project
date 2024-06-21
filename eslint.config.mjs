import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import jsxA11y from 'eslint-plugin-jsx-a11y';
import i18next from 'eslint-plugin-i18next';


export default [
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      semi: 2,
      indent: [2, 4],
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      'jsx-a11y/alt-text': 2,
      'react/react-in-jsx-scope': 'off',
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
      'no-unused-vars': 1,
      '@typescript-eslint/no-unused-vars': 1,
    }
  },
];