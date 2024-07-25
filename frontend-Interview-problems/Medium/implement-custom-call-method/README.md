# Implement Custom call() method

## Problem Statement
Write a function `customCall` that mimics the behavior of `Function.prototype.call`. The function should take a context and any number of arguments, and invoke the original function with the given context and arguments.

## Example
```javascript
function greet(greeting, name) {
  return greeting + ' ' + name;
}

console.log(customCall(greet, null, 'Hello', 'John')); // Output: 'Hello John'
```

## Constraints
  - Do not use `Function.prototype.call` or any third-party libraries.

## Notes
The `customCall` function should handle invoking the original function with the given context and arguments, similar to the behavior of `Function.prototype.call`.