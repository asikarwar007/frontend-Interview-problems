# Implement Custom setInterval

## Problem Statement
Write a function `customSetInterval` that mimics the behavior of `setInterval`. The function should take a callback and a delay in milliseconds, and repeatedly execute the callback after the specified delay.

## Example
```javascript
const intervalId = customSetInterval(() => console.log('Hello, world!'), 1000);

// To clear the interval after 5 seconds
customSetTimeout(() => customClearInterval(intervalId), 5000);
```

## Constraints
  - Do not use `setInterval` or any third-party libraries.

## Notes
The `customSetInterval` function should use `setTimeout` or similar to achieve the repeated execution.