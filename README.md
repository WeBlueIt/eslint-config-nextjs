# WeBlueIt ESLint rules (NextJS)

WeBlueIt ESLint configuration package for NextJS projects.

### Usage

Install required dependencies:

```bash
npm i --save-dev @weblueit/eslint-config-nextjs
```

Create ESLint configuration file .eslintrc.js extending from
`@weblueit/eslint-config-weblueit`:

```javascript
// eslintrc.js
module.exports = {
  extends: ['@weblueit/eslint-config-weblueit'],
}

```

Create Prettier configuration file .prettierrc.js:

```javascript
// prettierrc.js
const prettierConfig = require('@weblueit/eslint-config-weblueit/.prettierrc')

module.exports = prettierConfig;
```
