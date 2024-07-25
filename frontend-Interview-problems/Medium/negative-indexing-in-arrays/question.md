# Negative Indexing in Arrays (Proxies)

## Problem Statement
Write a function `createNegativeIndexedArray` that returns an array-like object supporting negative indices. The object should behave like a normal array but allow access to elements using negative indices, where `-1` refers to the last element, `-2` to the second last, and so on.

## Example
```javascript
const arr = createNegativeIndexedArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // Output: 5
console.log(arr[-2]); // Output: 4
console.log(arr[0]);  // Output: 1
console.log(arr[1]);  // Output: 2
```

## Constraints
  - Do not use any third-party libraries.

## Notes
Using proxies in JavaScript allows you to create objects with custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).