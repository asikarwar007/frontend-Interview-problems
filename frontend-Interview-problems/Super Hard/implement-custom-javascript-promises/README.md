# Implement Custom Javascript Promises

## Problem Statement
Write a class `MyPromise` that mimics the behavior of native JavaScript Promises. The class should have methods `then`, `catch`, and `finally` to handle promise resolution, rejection, and finalization. The constructor should take an executor function that receives `resolve` and `reject` functions to settle the promise.

## Example
```javascript
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise
  .then(value => {
    console.log(value); // Output: 'Success!'
    return 'Next Success';
  })
  .then(value => {
    console.log(value); // Output: 'Next Success'
  })
  .catch(error => {
    console.error(error);
  });
```

## Constraints
  - Do not use the native Promise class or any third-party libraries.

## Notes
The `MyPromise` class should handle asynchronous operations, chaining of `then` methods, error handling with `catch`, and finalization with `finally`.