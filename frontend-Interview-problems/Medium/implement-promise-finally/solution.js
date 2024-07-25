/**
 * Implement Promise.finally
 * 
 * @param {Promise} promise - The promise to add the `finally` method to
 * @return {Promise} - A promise with a `finally` method
 */
function promiseFinally(promise) {
    promise.finally = function(callback) {
        return promise.then(
            value => Promise.resolve(callback()).then(() => value),
            reason => Promise.resolve(callback()).then(() => { throw reason; })
        );
    };
    return promise;
}

// Example usage
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

/**
 * Explanation:
 * 
 * The `promiseFinally` function adds a `finally` method to the given promise.
 * The `finally` method accepts a callback that is invoked when the promise is settled.
 * The callback is called regardless of whether the promise was fulfilled or rejected.
 * The `finally` method ensures that the callback is executed and the promise is settled correctly.
 */