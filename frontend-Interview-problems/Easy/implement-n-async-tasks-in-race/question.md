# Implement 'N' async tasks in Race

## Problem Statement
Write a function `race` that takes an array of async tasks (functions that return a promise) and runs them in parallel. The function should return a promise that resolves or rejects as soon as the first promise in the array resolves or rejects.

## Example
```javascript
const task1 = () => new Promise((resolve) => setTimeout(() => resolve('Task 1'), 300));
const task2 = () => new Promise((resolve, reject) => setTimeout(() => reject('Task 2 Error'), 200));
const task3 = () => new Promise((resolve) => setTimeout(() => resolve('Task 3'), 100));

race([task1, task2, task3])
  .then(result => console.log(result)) // Output: 'Task 3'
  .catch(error => console.error(error)); // Output: 'Task 2 Error' (if rejection happens first)
```

## Constraints
  -Do not use Promise.race or any third-party libraries.

## Notes
The race function should handle any number of async tasks and return a promise that resolves or rejects as soon as one of the tasks completes or fails.