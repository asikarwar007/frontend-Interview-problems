# Implement Custom memoizeLast() method

## Problem Statement
Write a function `memoizeLast` that takes a function `func` and returns a new function that caches the result of `func` for the most recent arguments. If the new function is called with the same arguments as the last call, it returns the cached result.

## Example
```javascript
const add = (a, b) => a + b;
const memoizedAdd = memoizeLast(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(1, 2)); // Output: 3 (recomputed)
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `memoizeLast` function should handle caching the result of `func` for the most recent arguments, and should return the cached result if the same arguments are passed again.