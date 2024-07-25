/**
 * Implement Custom lodash _.chunk()
 * 
 * @param {Array} array - The array to process
 * @param {number} size - The size of each chunk
 * @return {Array} - The array of chunks
 */
function customChunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Example usage
console.log(customChunk([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

console.log(customChunk([1, 2, 3, 4, 5], 3));
// Output: [[1, 2, 3], [4, 5]]

/**
 * Explanation:
 * 
 * The `customChunk` function mimics the behavior of `_.chunk` from lodash.
 * It iterates through the input array in steps of the specified chunk size.
 * For each iteration, it slices a chunk of the specified size from the array and adds it to the result.
 * The function returns the array of chunks.
 */