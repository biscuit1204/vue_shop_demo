module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': 0,
    'space-before-function-paren': 0

  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ]
}
