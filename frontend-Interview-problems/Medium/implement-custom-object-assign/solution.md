# Implement Custom Object.assign

## Problem Statement
Write a function `customAssign` that mimics the behavior of `Object.assign`. The function should take a target object and one or more source objects and copy the properties from the source objects to the target object.

## Example
```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

console.log(customAssign(target, source1, source2)); 
// Output: { a: 1, b: 2, c: 3 }
```

## Constraints
  - Do not use `Object.assign` or any third-party libraries.

## Notes
The `customAssign` function should handle multiple source objects and correctly overwrite properties in the target object if there are conflicts.