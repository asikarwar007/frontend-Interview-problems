# Implement Custom lodash _.once()

## Problem Statement
Write a function `customOnce` that mimics the behavior of `_.once` from lodash. The function should take a function `func` and return a new function that can only be called once, subsequent calls should return the result of the first call.

## Example
```javascript
const initialize = customOnce(() => {
  console.log('Initialized');
  return true;
});

initialize(); // Output: 'Initialized'
initialize(); // No output
```

## Constraints
  - Do not use `_.once` or any third-party libraries.

## Notes
The `customOnce` function should handle ensuring that the original function is only called once, and subsequent calls return the same result.