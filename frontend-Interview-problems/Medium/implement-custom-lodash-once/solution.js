/**
 * Implement Custom lodash _.once()
 * 
 * @param {Function} func - The function to allow only one call to
 * @return {Function} - A new function that can only be called once
 */
function customOnce(func) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = func(...args);
        }
        return result;
    };
}

// Example usage
const initialize = customOnce(() => {
  console.log('Initialized');
  return true;
});

initialize(); // Output: 'Initialized'
initialize(); // No output

/**
 * Explanation:
 * 
 * The `customOnce` function mimics the behavior of `_.once` from lodash.
 * It ensures that the original function is only called once and caches the result of the first call.
 * Subsequent calls to the new function return the cached result.
 */