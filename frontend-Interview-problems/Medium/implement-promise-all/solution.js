/**
 * Implement Promise.all
 * 
 * @param {Array<Promise>} promises - An array of promises
 * @return {Promise} - A promise that resolves when all the promises resolve, or rejects if any promise rejects
 */
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed += 1;
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

// Example usage
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});

/**
 * Explanation:
 * 
 * The `promiseAll` function takes an array of promises and returns a new promise.
 * It uses `Promise.resolve` to handle both promise and non-promise values in the input array.
 * It tracks the completion of each promise and stores the result in the `results` array.
 * When all promises are resolved, it resolves the returned promise with the `results` array.
 * If any promise rejects, it immediately rejects the returned promise with the error.
 */