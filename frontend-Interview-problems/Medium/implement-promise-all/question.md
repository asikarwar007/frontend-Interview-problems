# Implement Promise.all

## Problem Statement
Write a function `promiseAll` that takes an array of promises and returns a new promise that resolves when all the promises in the array resolve, or rejects if any promise in the array rejects.

## Example
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

## Constraints
  - Do not use `Promise.all` or any third-party libraries.
## Notes

The `promiseAll` function should handle a mix of promise and non-promise values in the input array.