/**
 * Implement Custom reduce() method
 * 
 * @param {Array} array - The array to reduce
 * @param {Function} reducer - The reducer function
 * @param {*} [initialValue] - The initial value
 * @return {*} - The accumulated result
 */
function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
    }

    return accumulator;
}

// Example usage
const array = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(customReduce(array, sumReducer, 0)); // Output: 10
console.log(customReduce(array, sumReducer)); // Output: 10

/**
 * Explanation:
 * 
 * The `customReduce` function mimics the behavior of `Array.prototype.reduce`.
 * It initializes the accumulator with the provided initial value or the first element of the array if no initial value is provided.
 * It iterates through the array, applying the reducer function to the accumulator and the current element, and returns the accumulated result.
 */