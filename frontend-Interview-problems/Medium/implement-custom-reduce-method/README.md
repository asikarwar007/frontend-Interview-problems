# Implement Custom reduce() method

## Problem Statement
Write a function `customReduce` that mimics the behavior of `Array.prototype.reduce`. The function should take an array, a reducer function, and an optional initial value, and return the single accumulated result.

## Example
```javascript
const array = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(customReduce(array, sumReducer, 0)); // Output: 10
console.log(customReduce(array, sumReducer)); // Output: 10
```

## Constraints
  - Do not use `Array.prototype.reduce` or any third-party libraries.

## Notes
The `customReduce` function should handle cases where no initial value is provided, using the first element of the array as the initial value.