# Implement Custom typeof operator

## Problem Statement
Write a function `customTypeof` that mimics the behavior of the `typeof` operator. The function should take a value and return a string representing the type of the value.

## Example
```javascript
console.log(customTypeof(42)); // Output: 'number'
console.log(customTypeof('Hello')); // Output: 'string'
console.log(customTypeof(true)); // Output: 'boolean'
console.log(customTypeof({})); // Output: 'object'
console.log(customTypeof([])); // Output: 'object'
console.log(customTypeof(null)); // Output: 'null'
console.log(customTypeof(undefined)); // Output: 'undefined'
console.log(customTypeof(() => {})); // Output: 'function'
```

## Constraints
  - Do not use the `typeof` operator directly.
  - Do not use any third-party libraries.

## Notes
The `customTypeof` function should correctly identify the type of different values, including `null` and `arrays`.