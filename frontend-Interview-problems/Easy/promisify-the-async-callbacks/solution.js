/**
 * Promisify the Async Callbacks
 * 
 * @param {Function} func - The function to promisify
 * @return {Function} - A version of the function that returns a promise
 */
function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    };
}

// Example usage
const asyncFunc = (value, callback) => {
    setTimeout(() => {
        callback(null, value);
    }, 1000);
};

const promisifiedFunc = promisify(asyncFunc);
promisifiedFunc('test')
  .then(result => console.log(result)) // Output: 'test' after 1 second
  .catch(error => console.error(error));

/**
 * Explanation:
 * 
 * The `promisify` function takes a function `func` that follows the Node.js callback style.
 * It returns a new function that, when called, returns a promise. The new function calls
 * the original `func` with the provided arguments and a callback function. If the callback
 * receives an error, the promise is rejected; otherwise, it is resolved with the result.
 */