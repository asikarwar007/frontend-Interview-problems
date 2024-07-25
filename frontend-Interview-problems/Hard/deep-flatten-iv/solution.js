/**
 * Deep Flatten IV
 * 
 * @param {Array} arr - The array to deeply flatten
 * @return {Array} - The deeply flattened array
 */
function deepFlatten(arr) {
    let result = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten);
        } else if (item !== null && typeof item === 'object') {
            Object.values(item).forEach(flatten);
        } else {
            result.push(item);
        }
    }

    flatten(arr);
    return result;
}

// Example usage
console.log(deepFlatten([1, [2, { a: 3, b: [4, 5] }, 6], 7])); 
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log(deepFlatten([{ a: 1 }, [{ b: 2 }, [3, 4]], 5]));
// Output: [1, 2, 3, 4, 5]

/**
 * Explanation:
 * 
 * The `deepFlatten` function deeply flattens an array of nested arrays and objects.
 * It uses a helper function `flatten` to recursively traverse the input array.
 * The helper function checks if an item is an array, an object, or a primitive value, and flattens accordingly.
 * All values are extracted into a single flat array and returned.
 */