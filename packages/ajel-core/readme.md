## DEPRECATED

Personally - I recommend using [ajel](https://www.npmjs.com/ajel) instead.
[Follow this link to see the new api.](https://www.npmjs.com/ajel)

<p align="center"><a href="https://github.com/Handfish/ajel-go" target="_blank"><img src="https://raw.githubusercontent.com/Handfish/ajel-go/main/apps/docs/public/ajel2.svg" width="100" alt="Laravel Logo"></a></p>

<p align="center">Ajel is a <b>312 byte</b> set of functions that encourage you to handle errors in a way that is similar to Golang.</p>

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
import { sjel } from 'ajel';

function main() {
  const [res, err] = sjel(fs.readFileSync)(path, { encoding: 'utf8' });

  if (err) {
    return err;
  }

  return result;
}
```

`ajel` and `sjel` are a set of functions that return a tuple representing a potential result and a potential error.
On success, the result item has value. On error, the error item has value. It's that simple.

More interestingly, it comes with a series of linting tools to help enforce the paradigm available in the package [eslint-plugin-ajel](https://www.npmjs.com/package/eslint-plugin-ajel)
