/**
 * Implement Custom lodash _.memoize()
 * 
 * @param {Function} func - The function to memoize
 * @return {Function} - A new memoized function
 */
function customMemoize(func) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func(...args));
        }
        return cache.get(key);
    };
}

// Example usage
const add = (a, b) => a + b;
const memoizedAdd = customMemoize(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)

/**
 * Explanation:
 * 
 * The `customMemoize` function mimics the behavior of `_.memoize` from lodash.
 * It returns a new function that caches the results of the original function based on its arguments.
 * The cache is implemented using a `Map` to store the results with the arguments serialized as keys.
 * If the same arguments are passed again, the cached result is returned.
 */