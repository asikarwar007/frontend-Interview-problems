/**
 * Implement Promise.any
 * 
 * @param {Array<Promise>} promises - An array of promises
 * @return {Promise} - A promise that resolves as soon as one of the promises resolves
 */
function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        let rejectionReasons = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(resolve).catch(reason => {
                rejectionReasons[index] = reason;
                rejectedCount += 1;
                if (rejectedCount === promises.length) {
                    reject(rejectionReasons);
                }
            });
        });
    });
}

// Example usage
const promise1 = Promise.reject('error1');
const promise2 = Promise.reject('error2');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAny([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'foo'
}).catch((reasons) => {
  console.error(reasons); // ['error1', 'error2', 'error3'] (if all promises reject)
});

/**
 * Explanation:
 * 
 * The `promiseAny` function takes an array of promises and returns a new promise.
 * It uses `Promise.resolve` to handle both promise and non-promise values in the input array.
 * It tracks the rejection of each promise and stores the rejection reason in the `rejectionReasons` array.
 * If all promises reject, it rejects the returned promise with the `rejectionReasons` array.
 * If any promise resolves, it resolves the returned promise with the value of the first resolved promise.
 */