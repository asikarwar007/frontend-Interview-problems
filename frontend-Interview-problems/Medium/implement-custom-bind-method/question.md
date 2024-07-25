# Implement Custom bind() method

## Problem Statement
Write a function `customBind` that mimics the behavior of `Function.prototype.bind`. The function should take a context and any number of arguments, and return a new function that, when called, invokes the original function with the given context and arguments.

## Example
```javascript
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloToJohn = customBind(greet, null, 'Hello', 'John');
console.log(sayHelloToJohn()); // Output: 'Hello John'
```

## Constraints
  - Do not use `Function.prototype.bind` or any third-party libraries.

## Notes
The `customBind` function should handle creating a new function with the given context and partially applied arguments, similar to the behavior of `Function.prototype.bind`.