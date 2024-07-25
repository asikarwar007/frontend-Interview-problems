# Implement Custom Deep Clone

## Problem Statement
Write a function `deepClone` that creates a deep clone of an object. The function should recursively copy all properties of the object, including nested objects and arrays.

## Example
```javascript
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // Output: { a: 1, b: { c: 2 } }
console.log(clone === obj); // Output: false
console.log(clone.b === obj.b); // Output: false
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `deepClone` function should handle nested objects and arrays correctly, creating new copies of all nested structures.