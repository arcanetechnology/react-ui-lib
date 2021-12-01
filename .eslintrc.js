module.exports = {
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    jest: true,
  },
  plugins: [
    'react-hooks'
  ],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'max-len': ['error', { code: 200, ignorePattern: '^\\s*const\\s.+=\\s*\\(\\{\\s.+\\}\\)\\s.+>', ignoreComments: true }],
    'arrow-parens': ['error', 'always'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    radix: 'off',
    'import/order': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    yoda: 'off',
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off'
  },
  globals: {
    fetch: false,
    window: false,
    document: false,
    FormData: false,
    localStorage: false,
    alert: false,
    location: false,
    gapi: false,
    Blob: false,
    btoa: false,
    atob: false,
    FileReader: false,
    cy: false,
    Headers: false
  }
};
