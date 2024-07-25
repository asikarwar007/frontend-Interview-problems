# Implement Promise.allSettled

## Problem Statement
Write a function `promiseAllSettled` that takes an array of promises and returns a new promise that resolves when all the promises in the array have settled (either resolved or rejected). The resolved value of the returned promise should be an array of objects describing the outcome of each promise.

## Example
```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject('error');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAllSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results); 
  // [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 'error' },
  //   { status: 'fulfilled', value: 'foo' }
  // ]
});
```

## Constraints
  - Do not use `Promise.allSettled` or any third-party libraries.

## Notes
The `promiseAllSettled` function should handle a mix of promise and non-promise values in the input array.