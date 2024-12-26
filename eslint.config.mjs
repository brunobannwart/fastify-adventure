import TypescriptParser from '@typescript-eslint/parser';
import ImportPlugin from 'eslint-plugin-import';
import ImportHelpersPlugin from 'eslint-plugin-import-helpers';

export default [
  {
    files: [ '**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts' ],
    languageOptions: {
      parser: TypescriptParser,
    },
    plugins: {
      'eslint-plugin-import-helpers': ImportHelpersPlugin,
      'eslint-plugin-import': ImportPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
      'no-unused-expressions': [ 'error', { allowTernary: true } ],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'block-spacing': 'error',
      'keyword-spacing': 'error',
      'no-tabs': 'error',
      'no-unneeded-ternary': 'error',
      'no-whitespace-before-property': 'error',
      'quote-props': [ 'error', 'consistent' ],
      'quotes': [ 'error', 'single' ],
      'semi': [ 'error', 'always' ],
      'semi-spacing': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'arrow-spacing': 'error',
      'no-confusing-arrow': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'variable-name': 0,
      'import-name': 0,
      'no-param-reassign': 'off',
      'no-trailing-spaces': 'error',
      'prefer-const': 'warn',
      'no-duplicate-case': 'warn',
      'no-await-in-loop': 'warn',
      'no-continue': 'warn',
      'prefer-destructuring': 'warn',
      'object-curly-spacing': [ 'error', 'always' ],
      'rest-spread-spacing': [ 'error' ],
      'key-spacing': [ 'error' ],
      'comma-spacing': [ 'error' ],
      'no-multi-spaces': 'error',
      'lines-between-class-members': [
        'error',
        {
          enforce: [
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' },
            { blankLine: 'always', prev: 'field', next: 'field' },
          ],
        },
        { exceptAfterSingleLine: true },
      ],
      'max-len': [
        'warn',
        120,
        2,
        {
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'linebreak-style': [ 'warn', 'unix' ],
      'indent': [
        'error',
        2,
        {
          MemberExpression: 1,
          SwitchCase: 1,
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: [ 'if', 'for', 'while', 'block-like', 'block' ], next: '*' },
        { blankLine: 'always', prev: '*', next: [ 'if', 'for', 'while', 'block-like', 'block' ] },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
          allowSeparatedGroups: true,
        },
      ],
      'eslint-plugin-import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@src/',
            '/^@core/',
            '/^@domain/',
            '/^@presentation/',
            '/^@shared/',
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
    },
  },
];