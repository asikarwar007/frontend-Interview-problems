# Implement Debounce

## Problem Statement
In JavaScript, a debounce function limits the rate at which a function gets invoked. The debounce function delays the processing of the keyup event until the user has stopped typing for a predetermined amount of time.

Write a function `debounce` that takes two arguments:
1. A function `func` to debounce.
2. A delay `wait` in milliseconds.

The `debounce` function should return a debounced version of `func` that delays its execution until after `wait` milliseconds have elapsed since the last time it was invoked.

## Example
```javascript
const debouncedFunction = debounce(() => console.log('Executed!'), 2000);
debouncedFunction();
debouncedFunction();
debouncedFunction();
// "Executed!" will be logged to the console 2000 milliseconds after the last call.
```

## Constraints
The debounce function should handle consecutive calls correctly.
Do not use any third-party libraries.

## Notes
Debouncing is a common technique used in handling events like keystrokes, mouse movements, etc., where you want to limit the rate at which a function gets called.

