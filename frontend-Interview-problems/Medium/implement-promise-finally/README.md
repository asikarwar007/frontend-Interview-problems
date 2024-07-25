# Implement Promise.finally

## Problem Statement
Write a function `promiseFinally` that adds a `finally` method to a promise. The `finally` method should accept a callback that is invoked when the promise is settled, regardless of whether it was fulfilled or rejected.

## Example
```javascript
const promise = Promise.resolve('Success');

promiseFinally(promise).finally(() => {
  console.log('Promise settled');
}).then((value) => {
  console.log(value); // 'Success'
});

const failingPromise = Promise.reject('Error');

promiseFinally(failingPromise).finally(() => {
  console.log('Promise settled');
}).catch((error) => {
  console.error(error); // 'Error'
});
```

## Constraints
  - Do not use `Promise.prototype.finally` or any third-party libraries.

## Notes
The `finally` method is useful for executing code that should run regardless of whether the promise was fulfilled or rejected, such as cleanup operations.