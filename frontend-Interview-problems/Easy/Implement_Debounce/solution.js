/**
 * Implement Debounce
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @return {Function} - A debounced version of the given function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Example usage
const debouncedFunction = debounce(() => console.log('Executed!'), 2000);
debouncedFunction();
debouncedFunction();
debouncedFunction();
// "Executed!" will be logged to the console 2000 milliseconds after the last call.

/**
 * Explanation:
 * 
 * The `debounce` function creates a closure that holds a `timeout` variable.
 * Each time the debounced function is invoked, it clears the previous `timeout`
 * and sets a new one. The actual function `func` will only be called after
 * `wait` milliseconds have passed since the last invocation.
 * 
 * This ensures that `func` is only called once after a series of rapid calls,
 * making it useful for handling events like keystrokes or mouse movements.
 */