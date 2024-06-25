module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.app.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-shadow': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 0,
    'no-console': 1,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-no-useless-fragment': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'consistent-return': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
    extensions: ['.ts'],
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
};
