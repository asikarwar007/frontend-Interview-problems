# Implement Custom setTimeout

## Problem Statement
Write a function `customSetTimeout` that mimics the behavior of `setTimeout`. The function should take a callback and a delay in milliseconds, and execute the callback after the specified delay.

## Example
```javascript
customSetTimeout(() => console.log('Hello, world!'), 1000);
// Output: 'Hello, world!' after 1 second
```

## Constraints
  - Do not use `setTimeout` or any third-party libraries.

## Notes
The `customSetTimeout` function should use `setInterval` or similar to achieve the delay.