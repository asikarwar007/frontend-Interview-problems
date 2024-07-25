/**
 * Min By
 * 
 * @param {Array} arr - The array to search through
 * @param {function} criteria - The function to determine the criteria for comparison
 * @return {*} - The element with the minimum value based on the criteria
 */
function minBy(arr, criteria) {
    if (arr.length === 0) throw new Error('Array cannot be empty');
    return arr.reduce((min, current) => criteria(current) < criteria(min) ? current : min);
}

// Example usage
const arr = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
const criteria = item => item.n;
console.log(minBy(arr, criteria)); // { n: 2 }

/**
 * Explanation:
 * 
 * The `minBy` function finds the element in the array that has the minimum value according to the provided criteria function.
 * It uses the `reduce` method to iterate through the array and compare each element based on the value returned by the criteria function.
 * If the current element's criteria value is less than the minimum's criteria value, the current element becomes the new minimum.
 */