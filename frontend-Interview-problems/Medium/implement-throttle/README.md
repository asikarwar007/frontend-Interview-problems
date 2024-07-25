# Implement Throttle

## Problem Statement
Write a function `throttle` that limits the number of times a function can be called in a given period. The `throttle` function should take two arguments:
1. A function `func` to throttle.
2. A delay `wait` in milliseconds.

The `throttle` function should return a throttled version of `func` that, when invoked repeatedly, will call `func` at most once every `wait` milliseconds.

## Example
```javascript
const throttledFunction = throttle(() => console.log('Executed!'), 2000);
throttledFunction();
throttledFunction();
throttledFunction();
// "Executed!" will be logged to the console at most once every 2000 milliseconds.
```

## Constraints
  - Do not use any third-party libraries.

## Notes
Throttling is a technique used to control the rate at which a function is executed, typically in response to events like scrolling or resizing the window.