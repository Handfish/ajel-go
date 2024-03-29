# ajel-go/ajel-disable-try-catch

> This rule reports an error when a developer uses a `TryStatement`.

- ⭐️ This rule is included in `plugin:ajel/recommended` preset.

## Summary

The `ajel-disable-try-catch` rule identifies and reports instances where a `TryStatement` is used in the code. It suggests considering alternatives, such as using `{{ajelAlias}}`, to handle exceptional cases instead of relying on try-catch blocks.

## Rule Details

This rule checks for the presence of `TryStatement` instances in the code. If a `TryStatement` is found, an error is reported with a message suggesting the use of `{{ajelAlias}}` instead of try-catch blocks.

## Why is this Rule Useful?

The use of try-catch blocks does not align with preferred error-handling strategy. This disables try-catch in favour of using ajel. Utilizing ajel should encourage developers to handle errors more in a case-by-base basis, as well as reduce the use of the `let` keyword associated with try-catch closures.

## Options

- `ajelAlias` (default: 'ajel'): Specify the alias for the ajel method. This allows you to customize the method name if it differs from the default 'ajel'.
- `sjelAlias` (default: 'sjel'): Specify the alias for the sjel method. This allows you to customize the method name if it differs from the default 'sjel'.

## Implementation

- [Rule source](https://github.com/Handfish/ajel-go/blob/main/packages/eslint-plugin-ajel/src/rules/ajel-disable-try-catch.ts)
- [Test source](https://github.com/Handfish/ajel-go/blob/main/packages/eslint-plugin-ajel/tests/rules/ajel-disable-try-catch.ts)

## Examples

```javascript
// ajel
// Bad: Using TryStatement for error handling
let res;

try {
  res = foo;
  await dangerousOperation();
} catch (error) {
  return error;
}

// Better: Utilizing ajel method for error handling
const [res, err] = await ajel(dangerousOperation());

// -----

// sjel
// Bad: Using TryStatement for error handling
try {
  res = foo;
  JSON.parse("{'badjson`: 'asd'}");
} catch (error) {
  return error;
}

// Better: Utilizing sjel method for error handling
const [res, err] = sjel(JSON.parse)("{'badjson`: 'asd'}");
```
