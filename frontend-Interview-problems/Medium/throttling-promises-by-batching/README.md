# Throttling Promises by Batching

## Problem Statement
Write a function `batchPromises` that takes an array of promise-returning functions and a batch size, and executes the promises in batches. The function should return a promise that resolves when all the batches have been processed.

## Example
```javascript
const promiseFactory = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const promises = [promiseFactory(1), promiseFactory(2), promiseFactory(3), promiseFactory(4)];
const batchSize = 2;

batchPromises(promises, batchSize).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});
```

## Constraints
  - Do not use any third-party libraries.

## Notes
Throttling promises by batching allows you to control the rate at which asynchronous operations are executed, which can be useful for managing resources and avoiding overloading systems.