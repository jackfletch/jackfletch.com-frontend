import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({baseDirectory: __dirname});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: false,
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 80,
        },
      ],
      'no-unused-vars': [
        'warn',
        {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
      ],
      'prefer-const': ['error', {destructuring: 'all'}],
    },
  },
];

export default eslintConfig;
