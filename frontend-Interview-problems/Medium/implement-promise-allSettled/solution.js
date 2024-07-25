/**
 * Implement Promise.allSettled
 * 
 * @param {Array<Promise>} promises - An array of promises
 * @return {Promise} - A promise that resolves when all the promises have settled
 */
function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = { status: 'fulfilled', value: value };
            }).catch(reason => {
                results[index] = { status: 'rejected', reason: reason };
            }).finally(() => {
                completed += 1;
                if (completed === promises.length) {
                    resolve(results);
                }
            });
        });
    });
}

// Example usage
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

/**
 * Explanation:
 * 
 * The `promiseAllSettled` function takes an array of promises and returns a new promise.
 * It uses `Promise.resolve` to handle both promise and non-promise values in the input array.
 * It tracks the completion of each promise and stores the result in the `results` array.
 * Each result is an object with a `status` property ('fulfilled' or 'rejected') and either a `value` or `reason` property.
 * When all promises have settled, it resolves the returned promise with the `results` array.
 */