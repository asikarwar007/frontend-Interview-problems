# Implement Custom JSON.parse

## Problem Statement
Write a function `customParse` that mimics the behavior of `JSON.parse`. The function should take a JSON string and return the corresponding JavaScript value.

## Example
```javascript
console.log(customParse('{"a":1,"b":"test","c":true}'));
// Output: { a: 1, b: 'test', c: true }

console.log(customParse('[1,"test",true]'));
// Output: [1, 'test', true]
```

## Constraints
  - Do not use `JSON.parse` or any third-party libraries.

## Notes
The `customParse` function should handle JSON strings representing objects, arrays, strings, numbers, booleans, and `null` values correctly.