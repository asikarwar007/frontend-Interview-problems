# Implement Custom Deep Equal

## Problem Statement
Write a function `deepEqual` that takes two values and returns `true` if they are deeply equal and `false` otherwise. Deep equality means that all nested properties and values are equal.

## Example
```javascript
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // Output: true
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // Output: true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // Output: false
```

## Constraints
  - Do not use any third-party libraries.

## Notes
Deep equality is useful for comparing complex objects or arrays where shallow equality (using ===) is not sufficient.