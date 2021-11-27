# Weblueit lint rules

WeBlueIt ESLint configuration package

### Usage

Install required dependencies

```bash
npm i --save-dev --save-exact \
    @next/eslint-plugin-next@^12.0.4 \
    eslint@^7.32.0 \
    eslint-config-airbnb@^19.0.1 \
    eslint-config-prettier@^8.3.0 \
    eslint-config-next@^12.0.4 \
    eslint-plugin-import@^2.25.3 \
    eslint-plugin-jsx-a11y@^6.5.1 \
    eslint-plugin-prettier@^4.0.0 \
    eslint-plugin-react@^7.27.1 \
    eslint-plugin-react-hooks@^4.3.0 \
    prettier@^2.5.0 \
    github:WeBlueIt/eslint-config-weblueit#1.0.0
```

Create ESLint configuration file .eslintrc.js extending from
`@weblueit/eslint-config-weblueit`

```javascript
// eslintrc.js
module.exports = {
  extends: ['@weblueit/eslint-config-weblueit'],
}

```

Create Prettier configuration file .prettierrc.js

```javascript
// prettierrc.js
const prettierConfig = require('@weblueit/eslint-config-weblueit/.prettierrc')

module.exports = prettierConfig;
```
