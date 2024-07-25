# Implement Custom React 'classnames' library

## Problem Statement
Write a function `classnames` that mimics the behavior of the `classnames` library used in React. The function should take any number of arguments of different types (strings, objects, arrays) and return a string of class names based on the truthiness of the values.

## Example
```javascript
console.log(classnames('foo', { bar: true, baz: false }, ['qux', 'quux']));
// Output: 'foo bar qux quux'

console.log(classnames({ foo: true, bar: false }, 'baz', ['qux', { quux: true, corge: false }]));
// Output: 'foo baz qux quux'
```

## Constraints
  - Do not use the `classnames` library or any third-party libraries.

## Notes
The `classnames` function should handle different types of arguments and concatenate them into a single string of class names based on the truthiness of the values.