/**
 * Implement Promise.race
 * 
 * @param {Array<Promise>} promises - An array of promises
 * @return {Promise} - A promise that resolves or rejects as soon as one of the promises resolves or rejects
 */
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
}

// Example usage
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 50, 'three'));

promiseRace([promise1, promise2, promise3])
  .then((value) => console.log(value)) // Output: 'three'
  .catch((error) => console.log(error)); // Output: 'three' (if rejection happens first)

/**
 * Explanation:
 * 
 * The `promiseRace` function creates a new promise that resolves or rejects as soon as one
 * of the input promises resolves or rejects. It does this by iterating over the input promises
 * and attaching `then` and `catch` handlers to each one. The first promise to resolve or reject
 * will settle the returned promise.
 */