# Implement 'N' async tasks in Parallel

## Problem Statement
Write a function `parallelTasks` that takes an array of async tasks (functions that return a promise) and a limit `n`, and runs up to `n` tasks in parallel. The function should return a promise that resolves when all tasks are completed.

## Example
```javascript
const task = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const tasks = [task(1), task(2), task(3), task(4)];
const limit = 2;

parallelTasks(tasks, limit).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `parallelTasks` function should handle running tasks in parallel with a limit on the number of concurrent tasks.