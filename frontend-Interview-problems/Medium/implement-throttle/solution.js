/**
 * Implement Throttle
 * 
 * @param {Function} func - The function to throttle
 * @param {number} wait - The number of milliseconds to delay
 * @return {Function} - A throttled version of the given function
 */
function throttle(func, wait) {
    let lastCallTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCallTime >= wait) {
            lastCallTime = now;
            func.apply(this, args);
        }
    };
}

// Example usage
const throttledFunction = throttle(() => console.log('Executed!'), 2000);
throttledFunction();
throttledFunction();
throttledFunction();
// "Executed!" will be logged to the console at most once every 2000 milliseconds.

/**
 * Explanation:
 * 
 * The `throttle` function limits the number of times `func` can be called within a given period (`wait` milliseconds).
 * It uses a `lastCallTime` variable to track the time when `func` was last called.
 * If the current time (`now`) minus `lastCallTime` is greater than or equal to `wait`, `func` is called, and `lastCallTime` is updated.
 */