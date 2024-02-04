## DEPRECATED

Personally - I recommend using [ajel](https://github.com/Handfish/ajel) instead.
[Follow this link to see the new api.](https://github.com/Handfish/ajel)

<p align="center"><a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://raw.githubusercontent.com/Handfish/ajel-go/main/apps/docs/public/ajel2.svg" width="100"><a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Black.svg" width="100"></a></p>

<p align="center">ajel-go is a <b>312 byte</b> set of functions that encourage you to handle errors in a way that is similar to Golang.</p>

<p align="center">
<a href="https://www.npmjs.com/ajel-go" target="_blank"><img src="https://img.shields.io/npm/v/ajel-go.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/ajel-go" target="_blank"><img src="https://img.shields.io/npm/l/ajel-go.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/ajel-go" target="_blank"><img src="https://img.shields.io/npm/dt/ajel-go.svg" alt="NPM Downloads" /></a>
<a href="https://handfish.github.io/ajel-go" target="_blank"><img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white" /></a>
<a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>


# [ajel-go](https://handfish.github.io/ajel-go)

### Installation

`yarn add ajel-go eslint-plugin-ajel-go`

`pnpm add ajel-go eslint-plugin-ajel-go`


### Example usage
```typescript
// Handling async functions that throw
import { ajel } from 'ajel-go';

async function main() {
  const [result, err] = await ajel(Promise.resolve('hello world'));

  if (err) {
    return err;
  }

  return result;
}
```

```typescript
// Handling synchronous functions that throw
import { sjel } from 'ajel-go';

function main() {
  const [result, err] = sjel(JSON.parse)("{}");

  if (err) {
    return err;
  }

  return result;
}
```

`ajel` and `sjel` are a set of functions that return a tuple representing a potential result and a potential error.
On success, the result item has value. On error, the error item has value. It's that simple.

More interestingly, it comes with a series of linting tools to help enforce the paradigm available in the package `eslint-plugin-ajel`

### Basic eslintrc

```javascript
{
  plugins: ['ajel-go'],
  extends: [
    'plugin:ajel-go/recommended',
  ],
}
```

### What's inside this repo?

#### Apps and Packages

- `docs`: A placeholder documentation site powered by [Next.js](https://nextjs.org/)
- `ajel`: The core library (function)
- `eslint-plugin-ajel`: Eslint rules for proper usage and error handling paradigm
- `benchmarks`: Testing ajel-go's performance against other methods
