# Implement Custom clearAllTimers

## Problem Statement
Write a function `clearAllTimers` that clears all active timers (both `setTimeout` and `setInterval`).

## Example
```javascript
const timer1 = setTimeout(() => console.log('Timeout 1'), 1000);
const timer2 = setInterval(() => console.log('Interval 1'), 1000);
const timer3 = setTimeout(() => console.log('Timeout 2'), 2000);

clearAllTimers(); // This should clear timer1, timer2, and timer3
```

## Constraints
    - Do not use any third-party libraries.
    - The function should handle any number of active timers.

## Notes
Clearing all active timers is useful in scenarios where you want to ensure no pending or ongoing timeouts or intervals are left running, such as during cleanup in tests or when resetting application state.
