# Implement Custom lodash _.partial()

## Problem Statement
Write a function `customPartial` that mimics the behavior of `_.partial` from lodash. The function should take a function `func` and any number of arguments, and return a new function that, when called, invokes `func` with the provided arguments partially applied.

## Example
```javascript
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = customPartial(greet, 'Hello');
console.log(sayHelloTo('John')); // Output: 'Hello John'
```

## Constraints
  - Do not use `_.partial` or any third-party libraries.

## Notes
The `customPartial` function should handle partially applying arguments to the input function and return a new function that can be called with the remaining arguments.