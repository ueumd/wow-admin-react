module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    'plugin:prettier/recommended',
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    /**
     Don't use `{}` as a type. `{}` actually means "any non-nullish value".

     declare module '*.vue' {
          import type { DefineComponent } from 'vue'
          const component: DefineComponent<{}, {}, any>
          export default component
        }
     */
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    // 是否分号结尾
    semi: [0, 'never'],

    // 是否逗号结尾 never: 从不
    'comma-dangle': [0, 'never'],

    // 单引号还是双引号字符串
    quotes: [0, 'single'],

    // 方法前是否要一个空格 always: 总是要
    'space-before-function-paren': [0, 'never'],

    // override/add rules settings here, such as:
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-throw-literal': 'off',
    'no-callback-literal': 'off',

    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',

    // 关闭template 根元素限制
    'vue/no-multiple-template-root': 'off',

    '@typescript-eslint/no-empty-function': 'off',

    // any
    '@typescript-eslint/no-explicit-any': 'off',

    // 警告用户文件中包含未使用的变量, error强制性 "@typescript-eslint/no-unused-vars": ["error"]
    '@typescript-eslint/no-unused-vars': 'off',

    '@typescript-eslint/camelcase': 'off',

    // _this = this
    '@typescript-eslint/no-this-alias': 'off',

    //obj!.info
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
