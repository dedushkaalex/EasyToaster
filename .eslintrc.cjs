module.exports = {
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
    alias: {
        map: [['@', './src']],
      },
      typescript: true,
      node: true,
    },
    extensions: ['.ts'],
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
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
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.app.json',
  },
    ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  plugins: ['react', '@typescript-eslint', 'import', 'simple-import-sort', 'prettier'],
  rules: {
    // error
    'linebreak-style': ['error', 'unix'], // LF
    'no-param-reassign': ['error', { props: false }], // запретить мутацию аргументов
    'no-useless-computed-key': 'error', // ["a"]: -> a: // есть в рекомендациях, можно удалить
    'no-promise-executor-return': 'error', // не возвращать значение в промисе // есть в рекомендациях, можно удалить
    'array-callback-return': 'error', // проверка return в методах для массивов // есть в рекомендациях, можно удалить

    // warn
    'semi': ['warn', 'always'], // точка с запятой
    'spaced-comment': ['warn', 'always'], // пробел в начале коммента
    'comma-dangle': ['warn', 'always-multiline'], // запятая в конце списка
    'prefer-regex-literals': 'warn', // при возможности переводить new RegExp("^\\d\\.$"); -> /^\d\.$/;
    'prefer-object-spread': 'warn', // не использовать пустой объект, Object.assign({}, foo); -> { ...foo }
    'quote-props': 'warn', // убирает лишние кавычки в именах свойств { "name": ... } -> { name: ... }
    'prefer-template': 'warn', // оставить, не склеивать "+" стрингу с переменной (переводить в конкатенацию)
    'no-console': ['warn', { allow: ['warn', 'error'] }], // предупреждать об использовании console.log
    'no-return-assign': 'warn', // присвоение значения в return-е

    //off
    'strict': 'off', // use-strict // 1 ошибка
    'consistent-return': 'off', // обязательный return // 49 ошибок
    'no-plusplus': 'off', // ++ // 9 ошибок
    'no-alert': 'off', // 11 ошибок
    'no-restricted-globals': 'off', // глобальные переменные (location) // 13 ошибок
    'func-names': 'off', // требует название функции // 1 ошибка
    'guard-for-in': 'off', // просит проверку наличия элемента в объекте внутри цикла (hasOwnProperty.call) // 7 ошибок
    'require-jsdoc': 'off', // 296 ошибок
    'valid-jsdoc': 'off', // 217 ошибок
    'prefer-destructuring': 'off', // деструктуризация // 39 ошибок
    'no-restricted-syntax': 'off', // добавление ограничений в использовании различных методов/операторов (in, with, try-catch, ..) // 131 ошибка
    'class-methods-use-this': 'off', // обязательное использование this в классах // 1 ошибка
    'space-before-function-paren': ['off', 'never'], // пробел между "function" и скобками (). конфликтует с prettier // 48 ошибок
    'multiline-ternary': ['off', 'always-multiline'], // конфликтует с prettier, never ближе // 23 ошибки
    'no-underscore-dangle': 'off', // подчеркивание перед именем (_name) //  2 ошибки
    'arrow-body-style': 'off', // убирает лишние фигурные скобки, порой выглядит неопрятно // 19 ошибок
    'no-inner-declarations': 'off', // объявление функции или переменной должно быть в теле, оставить? // 2 ошибки

    // warn
    'react/no-unused-prop-types': 'warn', // не используемые пропсы
    'react/no-array-index-key': 'warn', // не добавлять index в key компонента
    'react/jsx-key': 'warn', // обязательное наличие ключа в компоненте

    // off
    'react/jsx-props-no-spreading': 'off', // запрещает {...props} // 26 ошибок
    'react/require-default-props': 'off', // дефолтное значение для не обязательных аргументов // 52 ошибки
    'react/no-children-prop': 'off', //  не передавать элементы как пропсу // 3 ошибки
    'react/jsx-no-useless-fragment': 'off', // запрещает фрагмент для оборачивания одного элемента // 25 ошибок
    'react/display-name': 'off', // обязательное имя для компонента (const Hello = memo(function Hello({ a })) // 6 ошибок
    'react/jsx-no-bind': 'off', // запрет на bind и стрелочные функции в пропсах // 11 ошибок
    'react/jsx-no-constructed-context-values': 'off', // добавлять контекст в useMemo // 8 ошибок
    'react/destructuring-assignment': 'off', // деструктуризация пропсов // 8 ошибок
    'react/no-unstable-nested-components': 'off', // запрещает создавать компонент внутри компонента // 3 ошибки

    // warn
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variableLike', // function, parameter, variable
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike', // class, enum, interface, typeAlias, typeParameter
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '(_)', varsIgnorePattern: '(_)' }], // не используемые переменные
    '@typescript-eslint/dot-notation': 'warn', // доступ к свойствам через точку target[id] -> target.id

    // off
    '@typescript-eslint/no-var-requires': 'off', // запрещает require // 11 ошибок
    '@typescript-eslint/no-namespace': 'off', // запрещает namespace // 26 ошибок
    '@typescript-eslint/no-empty-interface': 'off', // пустой интерфейс // 61 ошибка
    '@typescript-eslint/no-use-before-define': 'off', // порядок расположения переменных, функций и тп // 191 ошибка
    '@typescript-eslint/no-unused-expressions': 'off', // странное и не понятное правило // 41 ошибка
    '@typescript-eslint/no-shadow': 'off', // не должно пересекаться название переменной и аргумента // 38 ошибок
    '@typescript-eslint/ban-types': 'off', // запрещает ряд типов // 30 ошибок
    '@typescript-eslint/no-inferrable-types': 'off', // не указывать тип и значение одновременно в переменных и аргументах, излишняя информация // 4 ошибки
    '@typescript-eslint/no-non-null-assertion': 'off', // запретить  "!" // 86 ошибок
    '@typescript-eslint/no-explicit-any': 'off', // запрещает any // 27 ошибок

    // warn
    'jsx-a11y/anchor-is-valid': 'warn', // обязательное наличие href

    // off
    'jsx-a11y/no-static-element-interactions': 'off', // нужен атрибут роли для элементов // 1 ошибка
    'jsx-a11y/click-events-have-key-events': 'off', // толерантность, нужно поддерживать людей без мыши и трекпада // 1 ошибка

    // error
    'import/export': 'error',
    'import/no-duplicates': 'error',

    // off
    'import/order': 'off', // конфликтует с prettier и simple-import-sort // 2 ошибки
    'import/no-extraneous-dependencies': 'off', // сравнивает с зависимостями в package (в основном на react-redux ругается) // 54 ошибки
    'import/no-cycle': 'off', // цикл зависимости модулей // 129 ошибка
    'import/prefer-default-export': 'off', // "export default" // 181 ошибка

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react'], // react
          // ['@\\/(.*)'], // зависимости c @/
          // ['^\\w+'], // зависимости
          // ['^([.]+\\/(\\b(?:(?!.*?css$|.*?scss$)\\w)+\\b)|(\\.\\.)+\\/)'], // относительные пути, кроме style
          // ['\\/*.*.s?css$'], // стили
        ],
      },
    ],
  },
};
