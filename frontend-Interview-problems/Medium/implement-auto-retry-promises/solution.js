/**
 * Implement Auto-retry Promises
 * 
 * @param {Function} func - The function that returns a promise
 * @param {number} retries - The number of retries
 * @param {number} wait - The number of milliseconds to wait between retries
 * @return {Function} - A function that retries the given function up to `retries` times
 */
function autoRetry(func, retries, wait) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            const attempt = (retriesLeft) => {
                func(...args)
                    .then(resolve)
                    .catch((error) => {
                        if (retriesLeft === 0) {
                            reject(error);
                        } else {
                            setTimeout(() => attempt(retriesLeft - 1), wait);
                        }
                    });
            };
            attempt(retries);
        });
    };
}

// Example usage
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

/**
 * Explanation:
 * 
 * The `autoRetry` function returns a new function that retries the given `func` up to `retries` times.
 * It uses a recursive `attempt` function to handle the retry logic.
 * If `func` succeeds, it resolves the promise. If it fails, it waits for `wait` milliseconds and then retries until `retries` is exhausted.
 */