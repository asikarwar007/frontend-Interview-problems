# Implement Currying with Placeholders

## Problem Statement
Write a function `curry` that takes a function `func` and returns a curried version of `func`. The curried function should support placeholders (`_`) for partial application.

## Example
```javascript
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, _, 3)(2)); // Output: 6
```

## Constraints
  - Do not use any third-party libraries.
  - Use the placeholder `_` for partial application.

## Notes
Currying with placeholders allows you to create partially applied functions where some arguments are fixed, and others are left to be provided later.