# Implement Currying

## Problem Statement
Currying is a process in functional programming in which a function takes multiple arguments one at a time. Implement a function `curry` that takes a function `func` and returns a curried version of `func`.

## Example
```javascript
function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // 3

## Constraints
  - Do not use any third-party libraries.
  - The curry function should handle functions with multiple arguments.
