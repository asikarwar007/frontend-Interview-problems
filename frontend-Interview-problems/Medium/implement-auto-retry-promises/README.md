# Implement Auto-retry Promises

## Problem Statement
Write a function `autoRetry` that takes a function `func` which returns a promise, a number `retries`, and a delay `wait` in milliseconds. The `autoRetry` function should return a new function that, when called, retries the given function up to `retries` times with a delay of `wait` milliseconds between attempts if it fails.

## Example
```javascript
const unreliableFunction = () => new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('Success');
    } else {
        reject('Failure');
    }
});

const retryableFunction = autoRetry(unreliableFunction, 3, 1000);
retryableFunction()
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Output: 'Success' (if succeeds within 3 retries) or 'Failure' (if all retries fail)
```

## Constraints
  - Do not use any third-party libraries.

## Notes
Auto-retrying a promise is useful for handling unreliable asynchronous operations that may fail intermittently, such as network requests.