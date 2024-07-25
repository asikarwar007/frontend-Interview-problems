# Promisify the Async Callbacks

## Problem Statement
Write a function `promisify` that takes a function `func` which follows the Node.js callback style (i.e., the last argument is a callback function) and returns a version that returns a promise.

## Example
```javascript
const asyncFunc = (value, callback) => {
    setTimeout(() => {
        callback(null, value);
    }, 1000);
};

const promisifiedFunc = promisify(asyncFunc);
promisifiedFunc('test')
  .then(result => console.log(result)) // Output: 'test' after 1 second
  .catch(error => console.error(error));

## Constraints
    - Do not use any third-party libraries.
    - The original func should follow the Node.js callback style, where the last argument is a callback function that takes an error as the first argument and the result as the second argument.
## Notes
Promisifying a function allows you to work with promises instead of callbacks, which can make the code more readable and easier to work with.