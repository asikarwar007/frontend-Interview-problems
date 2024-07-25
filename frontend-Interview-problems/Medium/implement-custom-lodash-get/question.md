# Implement Custom lodash _.get()

## Problem Statement
Write a function `customGet` that mimics the behavior of `_.get` from lodash. The function should take an object, a path (string or array), and an optional default value, and return the value at the specified path in the object. If the value is `undefined`, it should return the default value.

## Example
```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(customGet(object, 'a[0].b.c')); // Output: 3
console.log(customGet(object, ['a', '0', 'b', 'c'])); // Output: 3
console.log(customGet(object, 'a.b.c', 'default')); // Output: 'default'
```

## Constraints
  - Do not use `_.get` or any third-party libraries.

## Notes
The `customGet` function should handle both string and array paths and should be able to return a default value if the specified path does not exist in the object.