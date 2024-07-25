/**
 * Deep Flatten I
 * 
 * @param {Array} arr - The array to deeply flatten
 * @return {Array} - The deeply flattened array
 */
function deepFlatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? deepFlatten(toFlatten) : toFlatten);
    }, []);
}

// Example usage
console.log(deepFlatten([1, [2, [3, [4]], 5]])); 
// Output: [1, 2, 3, 4, 5]

console.log(deepFlatten([[1, 2, [3]], 4, [5, [6, 7]]])); 
// Output: [1, 2, 3, 4, 5, 6, 7]

/**
 * Explanation:
 * 
 * The `deepFlatten` function uses the `reduce` method to iterate over each element of the input array `arr`.
 * It checks if the current element `toFlatten` is an array using `Array.isArray`.
 * If `toFlatten` is an array, it recursively calls `deepFlatten` on `toFlatten`.
 * If `toFlatten` is not an array, it is added to the accumulator `flat`.
 * The recursion ensures that all levels of nested arrays are flattened into a single array.
 */