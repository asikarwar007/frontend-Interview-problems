# Implement Custom lodash _.omit()

## Problem Statement
Write a function `customOmit` that mimics the behavior of `_.omit` from lodash. The function should take an object and an array of property paths, and return a new object with the specified properties omitted.

## Example
```javascript
const object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(customOmit(object, ['a', 'c'])); 
// Output: { 'b': '2' }
```

## Constraints
  - Do not use `_.omit` or any third-party libraries.

## Notes
The `customOmit` function should handle nested properties and return a new object without modifying the original object.