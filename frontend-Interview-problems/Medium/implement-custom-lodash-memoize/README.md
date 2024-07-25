# Implement Custom lodash _.memoize()

## Problem Statement
Write a function `customMemoize` that mimics the behavior of `_.memoize` from lodash. The function should take a function `func` and return a new function that caches the results of `func` based on its arguments.

## Example
```javascript
const add = (a, b) => a + b;
const memoizedAdd = customMemoize(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)
```

## Constraints
  - Do not use `_.memoize` or any third-party libraries.

## Notes
The `customMemoize` function should handle caching the results of `func` based on its arguments, and should return the cached result if the same arguments are passed again.