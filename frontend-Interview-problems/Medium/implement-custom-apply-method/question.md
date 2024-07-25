# Implement Custom apply() method

## Problem Statement
Write a function `customApply` that mimics the behavior of `Function.prototype.apply`. The function should take a context and an array of arguments, and invoke the original function with the given context and arguments.

## Example
```javascript
function greet(greeting, name) {
  return greeting + ' ' + name;
}

console.log(customApply(greet, null, ['Hello', 'John'])); // Output: 'Hello John'
```

## Constraints
  - Do not use `Function.prototype.apply` or any third-party libraries.

## Notes
The `customApply` function should handle invoking the original function with the given context and arguments, similar to the behavior of `Function.prototype.apply`.