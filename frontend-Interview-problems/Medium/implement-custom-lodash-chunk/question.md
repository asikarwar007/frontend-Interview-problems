# Implement Custom lodash _.chunk()

## Problem Statement
Write a function `customChunk` that mimics the behavior of `_.chunk` from lodash. The function should take an array and a chunk size, and return an array of arrays, each containing elements from the original array grouped into chunks of the specified size.

## Example
```javascript
console.log(customChunk([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

console.log(customChunk([1, 2, 3, 4, 5], 3));
// Output: [[1, 2, 3], [4, 5]]
```

## Constraints
  - Do not use `_.chunk` or any third-party libraries.

## Notes
The `customChunk` function should handle cases where the array cannot be evenly divided by the chunk size.