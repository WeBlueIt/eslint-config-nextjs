# Weblueit lint rules

WeBlueIt ESLint configuration package

### Usage

Install dev-dependencies

```shell
npm i --save-dev --save-exact \
    @next/eslint-plugin-next@^12.0.4 \
    eslint@^7.32.0 \
    eslint-config-airbnb@^19.0.1 \
    eslint-config-next@^12.0.4 \
    eslint-plugin-import@^2.25.3 \
    eslint-plugin-jsx-a11y@^6.5.1 \
    eslint-plugin-react@^7.27.1 \
    eslint-plugin-react-hooks@^4.3.0 \
    github:WeBlueIt/eslint-config-weblueit
```

Create ESLint configuration file .eslintrc.js extending from
`@weblueit/eslint-config-weblueit`

```javascript
module.exports = {
  extends: [
    '@weblueit/eslint-config-weblueit',
  ],
}
```
