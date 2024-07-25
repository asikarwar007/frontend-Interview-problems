# Implement Promise.any

## Problem Statement
Write a function `promiseAny` that takes an array of promises and returns a new promise that resolves as soon as one of the promises in the array resolves. If all promises reject, the returned promise should reject with an array of rejection reasons.

## Example
```javascript
const promise1 = Promise.reject('error1');
const promise2 = Promise.reject('error2');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAny([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'foo'
}).catch((reasons) => {
  console.error(reasons); // ['error1', 'error2', 'error3'] (if all promises reject)
});
```

## Constraints
  - Do not use `Promise.any` or any third-party libraries.

## Notes
The `promiseAny` function should handle a mix of promise and non-promise values in the input array.