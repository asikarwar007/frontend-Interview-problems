/**
 * Mean
 * 
 * @param {Array<number>} arr - The array of numbers to calculate the mean
 * @return {number} - The mean of the numbers in the array
 */
function mean(arr) {
    if (arr.length === 0) throw new Error('Array cannot be empty');
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Example usage
console.log(mean([1, 2, 3, 4, 5])); // 3

/**
 * Explanation:
 * 
 * The `mean` function calculates the average value of an array of numbers.
 * It uses the `reduce` method to sum all elements in the array, then divides the sum by the length of the array to find the mean.
 * If the array is empty, an error is thrown to indicate that the input is invalid.
 */