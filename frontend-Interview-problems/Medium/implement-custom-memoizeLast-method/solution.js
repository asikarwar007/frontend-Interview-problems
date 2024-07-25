/**
 * Implement Custom memoizeLast() method
 * 
 * @param {Function} func - The function to memoize
 * @return {Function} - A new memoized function
 */
function memoizeLast(func) {
    let lastArgs = null;
    let lastResult = null;

    return function(...args) {
        if (lastArgs && lastArgs.length === args.length && lastArgs.every((arg, index) => arg === args[index])) {
            return lastResult;
        }
        lastArgs = args;
        lastResult = func(...args);
        return lastResult;
    };
}

// Example usage
const add = (a, b) => a + b;
const memoizedAdd = memoizeLast(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(1, 2)); // Output: 3 (recomputed)

/**
 * Explanation:
 * 
 * The `memoizeLast` function caches the result of the last call to the original function.
 * If the new function is called with the same arguments as the last call, it returns the cached result.
 * The comparison of arguments is done using the `every` method to check if all arguments are the same.
 */