const base = require('@secto-sessions/dev/config/eslint.js')

module.exports = {
  ...base,
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'useJSXTextNode': true,
    'project': './tsconfig.dev.json'
  }
}
