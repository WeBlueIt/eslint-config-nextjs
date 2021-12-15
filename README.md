# WeBlueIt ESLint rules (NextJS)

WeBlueIt ESLint configuration package for NextJS projects.

### Usage

Install required dependencies:

```bash
npm i --save-dev @weblueit/eslint-config-nextjs
```

Create ESLint configuration file .eslintrc.js extending from
`@weblueit/eslint-config-nextjs`:

```javascript
// eslintrc.js
module.exports = {
  extends: ['@weblueit/eslint-config-nextjs'],
}

```

Create Prettier configuration file .prettierrc.js:

```javascript
// prettierrc.js
const prettierConfig = require('@weblueit/eslint-config-nextjs/.prettierrc')

module.exports = prettierConfig;
```
