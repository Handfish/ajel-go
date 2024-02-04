<p align="center"><a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://raw.githubusercontent.com/Handfish/ajel-go/main/apps/docs/public/ajel2.svg" width="100" alt="Laravel Logo"></a></p>

<p align="center">Ajel is a <b>312 byte</b> set of functions that encourage you to handle errors in a way that is similar to Golang.</p>

<p align="center">
<a href="https://www.npmjs.com/ajel" target="_blank"><img src="https://img.shields.io/npm/v/ajel.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/ajel" target="_blank"><img src="https://img.shields.io/npm/l/ajel.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/ajel" target="_blank"><img src="https://img.shields.io/npm/dt/ajel.svg" alt="NPM Downloads" /></a>
<a href="https://handfish.github.io/ajel" target="_blank"><img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white" /></a>
<a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

# [ajel](https://handfish.github.io/ajel)

### Installation

`yarn add ajel eslint-plugin-ajel-go`

`pnpm add ajel eslint-plugin-ajel-go`

### Basic eslintrc

```javascript
{
  plugins: ['ajel-go'],
  extends: [
    'plugin:ajel/recommended',
  ],
}
```

### Advanced eslintrc

```javascript
{
  plugins: ['ajel-go'],
  extends: [
    'plugin:ajel/recommended',
  ],
  rules: {
    'ajel-go/ajel-const-tuples': [
      'error',
      {
        ajelAlias: "blimpy",
        sjelAlias: "limpyb",
      },
    ],
    'ajel-go/ajel-require-tuple-declaration': [
      'error',
      {
        ajelAlias: 'blimpy',
        sjelAlias: "limpyb",
      },
    ],
    'ajel-go/ajel-disable-try-catch': [
      'error',
      {
        ajelAlias: 'blimpy',
        sjelAlias: "limpyb",
      },
    'ajel/sjel-require-currying': [
      'error',
      {
        sjelAlias: "limpyb",
      },
    //Use one of the two following rules
    'ajel-go/ajel-require-error-handling': [
      'error',
      {
        ajelAlias: 'blimpy',
        sjelAlias: "limpyb",
      },
    ],
    //'ajel-go/ajel-strict-error-instanceof': [
    //  'off',
    //  {
    //    ajelAlias: 'blimpy',
    //    sjelAlias: "limpyb",
    //  },
    //],
  },
}
```

`ajel` and `sjel` are a set of functions that return a tuple representing a potential result and a potential error.
On success, the result item has value. On error, the error item has value. It's that simple.

More interestingly, it comes with a series of linting tools to help enforce the paradigm available in the package `eslint-plugin-ajel`
