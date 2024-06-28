import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import jsxA11y from 'eslint-plugin-jsx-a11y';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';


export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      'jsx-a11y': jsxA11y,
      'i18next': i18next,
      'react-hooks': reactHooks,
    },
    rules: {
      semi: 2,
      indent: [2, 4],
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      'jsx-a11y/alt-text': 2,
      'react/react-in-jsx-scope': 'off',
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
      'no-undef': 1,
      'no-unused-vars': 1,
      '@typescript-eslint/no-unused-vars': 1,
      'object-curly-spacing': ["error", "always"],
      'max-len': ['error', { ignoreComments: true, code: 120 }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      // 'i18next/no-literal-string': [
      //     2,
      //   {
      //     markupOnly: true,
      //     ignoreAttribute: ['data-testid', 'to']
      //   }
      // ]
    },
    languageOptions: {
      globals: {
        __IS_DEV__: true,
      },
    },
  },
  {
    files: ["**/src/**/*.{test,stories}.{ts,tsx,jsx}"],
    rules: {
      'max-len': "off",
    }
  },
  {
    files: ["**/index.{ts,js}"],
    rules: {
      "@typescript-eslint/no-var-requires": "off"
    }
  }
];