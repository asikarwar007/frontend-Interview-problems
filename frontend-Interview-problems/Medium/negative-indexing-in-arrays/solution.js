/**
 * Negative Indexing in Arrays (Proxies)
 * 
 * @param {Array} arr - The original array
 * @return {Proxy} - A proxy that supports negative indexing
 */
function createNegativeIndexedArray(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            if (typeof prop === 'string' && !isNaN(prop)) {
                prop = Number(prop);
                if (prop < 0) {
                    prop = target.length + prop;
                }
            }
            return target[prop];
        }
    });
}

// Example usage
const arr = createNegativeIndexedArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // Output: 5
console.log(arr[-2]); // Output: 4
console.log(arr[0]);  // Output: 1
console.log(arr[1]);  // Output: 2

/**
 * Explanation:
 * 
 * The `createNegativeIndexedArray` function returns a proxy for the input array `arr`.
 * The proxy intercepts property accesses using the `get` handler.
 * If the property `prop` is a string representing a number, it is converted to a number.
 * If `prop` is negative, it is converted to a positive index by adding it to the array's length.
 * The value at the computed index is then returned.
 */