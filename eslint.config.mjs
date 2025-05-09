import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';
import hooksPlugin from "eslint-plugin-react-hooks";
import checkImportPlugin from "eslint-plugin-deynega-check-import-path";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions:
        {
          globals: globals.browser
        }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  i18next.configs['flat/recommended'],
  eslintPluginPrettier,

  {
    plugins: {
      "react-hooks": hooksPlugin,
      "check-import-plugin": checkImportPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "check-import-plugin/check-import-path": "error",
    },
  },
  {
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-namespace': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': ['error', { markupOnly: true }],
      'object-curly-spacing': ['error', 'always'], // пробелы внутри скобок
      "quotes": ["error", "single", { "avoidEscape": true }], // одианрные кавычки,
      'react/prop-types': 'off',
      "unused-imports/no-unused-imports": "error",
      'no-unused-vars': 'off',
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ]
    }
  }
];