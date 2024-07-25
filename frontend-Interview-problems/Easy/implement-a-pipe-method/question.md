# Implement a Pipe Method

## Problem Statement
Implement a function `pipe` that takes any number of functions as arguments and returns a new function that, when called, runs the provided functions in sequence. The output of each function becomes the input to the next function.

## Example
```javascript
const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

const pipedFunction = pipe(add, multiply, subtract);
console.log(pipedFunction(5)); // Output: 9 ((5 + 1) * 2 - 3)
```

## Constraints
  -Do not use any third-party libraries.
  -The functions passed to pipe will always take a single argument and return a single value.

## Notes
Piping functions is a common technique in functional programming where the output of one function is passed as the input to the next function.
