# Implement Custom Object.is() method

## Problem Statement
Write a function `is` that behaves like `Object.is()`. The `Object.is()` method determines whether two values are the same value. 

## Example
```javascript
console.log(is(25, 25)); // Output: true
console.log(is('foo', 'foo')); // Output: true
console.log(is(null, null)); // Output: true
console.log(is(0, -0)); // Output: false
console.log(is(NaN, NaN)); // Output: true
console.log(is({}, {})); // Output: false
```

## Constraints
  - Do not use Object.is() or any third-party libraries.

## Notes
The `Object.is()` method differs from the strict equality `(===)` operator in two ways:

  - `Object.is(NaN, NaN)` returns `true`, while `NaN === NaN` returns `false`.
  - `Object.is(0, -0)` returns `false`, while `0 === -0` returns `true`.
