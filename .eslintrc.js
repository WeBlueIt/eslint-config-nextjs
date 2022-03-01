module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
    // Not enforced
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['./node_modules', './src'],
      },
    },
  },
}
