module.exports = {
  extends: [
    'airbnb',
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: 'latest',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: [
    'html',
    'react',
    'prettier',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    '@typescript-eslint/no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'flowtype/no-types-missing-file-annotation': 0,
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-plusplus': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-console': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    'eslint-disable max-classes-per-file': 0,
    'eslint-disable lines-between-class-members': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'import/no-anonymous-default-export': [2, { allowArrowFunction: true }],
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-uses-vars': 'error',
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/jsx-fragments': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    radix: 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        printWidth: 80,
        proseWrap: 'never',
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
