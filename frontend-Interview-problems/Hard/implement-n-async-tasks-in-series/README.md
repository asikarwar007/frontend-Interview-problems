# Implement 'N' async tasks in Series

## Problem Statement
Write a function `seriesTasks` that takes an array of async tasks (functions that return a promise) and runs them in series. The function should return a promise that resolves when all tasks are completed.

## Example
```javascript
const task = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const tasks = [task(1), task(2), task(3), task(4)];

seriesTasks(tasks).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `seriesTasks` function should handle running tasks in series, one after the other, and collect the results in the same order as the input tasks.