import path from "path";
import { fileURLToPath } from "url";

import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import * as tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ["dist/**", "**/*.config.js", "**/*.config.mjs", "**/*.config.ts"],
  },

  js.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    // ignores: ["**/*.stories.*"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: 2021,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
      //   import: importPlugin,
      //   perfectionist,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      "arrow-parens": "off",
      "consistent-return": "off",
      curly: ["error", "all"],
      //   "import/extensions": [
      //     "error",
      //     {
      //       css: "always",
      //       json: "always",
      //       scss: "always",
      //       svg: "always",
      //     },
      //   ],
      //   "import/no-duplicates": "off",
      //   "import/order": "off",
      //   "import/prefer-default-export": "off",
      "max-lines": ["error", 500],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "off",
      "no-duplicate-imports": "error",
      "no-empty-pattern": "off",
      "no-nested-ternary": "error",
      "no-undef": "warn",
      "no-unused-vars": "off",
      "no-var": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", next: "return", prev: "*" },
        { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
        {
          blankLine: "any",
          next: ["const", "let", "var"],
          prev: ["const", "let", "var"],
        },
      ],

      //   "perfectionist/sort-imports": [
      //     "error",
      //     {
      //       customGroups: {
      //         type: {
      //           react: "react",
      //         },
      //         value: {
      //           react: ["react", "react-*"],
      //         },
      //       },
      //       groups: [
      //         "type",
      //         "react",
      //         "builtin",
      //         "external",
      //         "internal-type",
      //         "internal",
      //         "side-effect",
      //         "style",
      //       ],
      //       newlinesBetween: "always",
      //       order: "asc",
      //       type: "natural",
      //     },
      //   ],

      "prefer-const": "error",

      // React правила
      "react/button-has-type": "error",
      "react/display-name": "off",
      "react/jsx-boolean-value": ["error"],
      "react/jsx-curly-brace-presence": [
        "error",
        { children: "ignore", propElementValues: "always", props: "always" },
      ],
      "react/jsx-fragments": ["error"],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/void-dom-elements-no-children": ["error"],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      //   "import/resolver": {
      //     node: {
      //       extensions: [".js", ".jsx", ".ts", ".tsx"],
      //       paths: ["src"],
      //     },
      //     typescript: {
      //       alwaysTryTypes: true,
      //       project: "./tsconfig.eslint.json",
      //     },
      //   },
    },
  },
  // Stories файлы (без TypeScript парсера)
  {
    files: ["**/*.stories.ts", "**/*.stories.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      // Базовые правила для stories
      "no-console": "off",
      "react-hooks/rules-of-hooks": "off",
      "max-lines": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
      import: importPlugin,
      perfectionist,
    },
    rules: {
      // Базовые правила для JS файлов
    },
  },
];
