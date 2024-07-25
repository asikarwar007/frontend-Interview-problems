# Implement Custom lodash _.set()

## Problem Statement
Write a function `customSet` that mimics the behavior of `_.set` from lodash. The function should take an object, a path (string or array), and a value, and set the value at the specified path in the object.

## Example
```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };

customSet(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // Output: 4

customSet(object, ['a', '0', 'b', 'd'], 5);
console.log(object.a[0].b.d); // Output: 5
```

## Constraints
  - Do not use `_.set` or any third-party libraries.

## Notes
The `customSet` function should handle both string and array paths and should create any intermediate properties if they do not exist.