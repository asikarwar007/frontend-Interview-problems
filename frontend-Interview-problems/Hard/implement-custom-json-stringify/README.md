# Implement Custom JSON.stringify

## Problem Statement
Write a function `customStringify` that mimics the behavior of `JSON.stringify`. The function should take a value and return a JSON string representation of that value.

## Example
```javascript
console.log(customStringify({ a: 1, b: 'test', c: true }));
// Output: '{"a":1,"b":"test","c":true}'

console.log(customStringify([1, 'test', true]));
// Output: '[1,"test",true]'
```

## Constraints
  - Do not use `JSON.stringify` or any third-party libraries.

## Notes
The `customStringify` function should handle objects, arrays, strings, numbers, booleans, and `null` values correctly.