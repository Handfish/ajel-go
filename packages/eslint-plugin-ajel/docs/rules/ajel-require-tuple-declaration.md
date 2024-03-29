# ajel-go/ajel-require-tuple-declaration

> Variable declarations must be a tuple of length 2 when calling `ajel`.

- ⭐️ This rule is included in `plugin:ajel/recommended` preset.

## Summary

The `ajel-require-tuple-declaration` rule ensures that when calling `ajel`, variable declarations are structured as tuples of length 2. This enforces consistency and readability in code where `ajel` is used.

## Rule Details

This rule checks for variable declarations associated with an `ajel` call. It ensures that only one declarator is used, and the declarator is an `ArrayPattern` with exactly two elements.

## Why is this Rule Useful?

This rule assists developers towards the proper usage of ajel.

## Options

- `ajelAlias` (default: 'ajel'): Specify the alias for the ajel method. This allows you to customize the method name if it differs from the default 'ajel'.
- `sjelAlias` (default: 'sjel'): Specify the alias for the sjel method. This allows you to customize the method name if it differs from the default 'sjel'.

## Implementation

- [Rule source](https://github.com/Handfish/ajel-go/blob/main/packages/eslint-plugin-ajel/src/rules/ajel-require-tuple-declaration.ts)
- [Test source](https://github.com/Handfish/ajel-go/blob/main/packages/eslint-plugin-ajel/tests/rules/ajel-require-tuple-declaration.ts)

## Examples

```javascript
// ajel
// Bad: Incorrect structure
const [value] = await ajel(Promise.resolve(1)); // Violation: Tuple must have exactly 2 elements

// Bad: Incorrect structure
const err = await ajel(Promise.resolve(1)); // Violation: Limit declarations to a tuple

// Good: Correct tuple declaration
const [data, err] = await ajel(Promise.resolve(1));

// -----

// sjel
// Bad: Incorrect structure
const [value] = sjel(() => 1)(); // Violation: Tuple must have exactly 2 elements

// Bad: Incorrect structure
const err = sjel(() => 1)(); // Violation: Limit declarations to a tuple

// Good: Correct tuple declaration
const [data, err] = sjel(() => 1)();
```
