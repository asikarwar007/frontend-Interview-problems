/**
 * Implement Custom setInterval
 * 
 * @param {Function} callback - The callback function to execute
 * @param {number} delay - The delay in milliseconds
 * @return {Object} - An interval object
 */
function customSetInterval(callback, delay) {
    let intervalId = {};
    function repeat() {
        intervalId.timeoutId = customSetTimeout(() => {
            callback();
            repeat();
        }, delay);
    }
    repeat();
    return intervalId;
}

/**
 * Implement Custom clearInterval
 * 
 * @param {Object} intervalId - The interval object returned by customSetInterval
 */
function customClearInterval(intervalId) {
    clearTimeout(intervalId.timeoutId);
}

// Example usage
const intervalId = customSetInterval(() => console.log('Hello, world!'), 1000);

// To clear the interval after 5 seconds
customSetTimeout(() => customClearInterval(intervalId), 5000);

/**
 * Explanation:
 * 
 * The `customSetInterval` function mimics the behavior of `setInterval` using `setTimeout`.
 * It repeatedly sets a timeout that executes the callback and sets another timeout.
 * The function returns an interval object that can be used to clear the interval using `customClearInterval`.
 */