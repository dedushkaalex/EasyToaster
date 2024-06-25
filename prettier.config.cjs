module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  semi: true,
  arrowParens: 'avoid',
  bracketSameLine: false,
  importOrder: [
    '^react(.*)', // react
    // '@\\/(.*)', // зависимости c @/
    // '^\\w+', // зависимости
    // '^([.]+\\/(\\b(?:(?!.*?css$|.*?scss$)\\w)+\\b)|(\\.\\.)+\\/)', // относительные пути, кроме style
    // '\\/*.*.s?css$', // стили
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: '**/*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
  bracketSpacing: true,
  proseWrap: 'never',
  quoteProps: 'consistent',
  endOfLine: 'lf',
};
