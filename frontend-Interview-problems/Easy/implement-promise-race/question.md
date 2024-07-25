# Implement Promise.race

## Problem Statement
Implement a function `promiseRace` that takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

## Example
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 50, 'three'));

promiseRace([promise1, promise2, promise3])
  .then((value) => console.log(value)) // Output: 'three'
  .catch((error) => console.log(error)); // Output: 'three' (if rejection happens first)

## Constraints
Do not use Promise.race or any third-party libraries.

## Notes
The Promise.race method returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
