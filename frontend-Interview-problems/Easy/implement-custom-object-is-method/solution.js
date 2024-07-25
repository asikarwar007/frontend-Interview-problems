/**
 * Implement Custom Object.is() method
 * 
 * @param {*} value1 - The first value to compare
 * @param {*} value2 - The second value to compare
 * @return {boolean} - True if the values are the same, false otherwise
 */
function is(value1, value2) {
    if (value1 === value2) {
        // Handles cases where value1 and value2 are the same except for 0 and -0
        return value1 !== 0 || 1 / value1 === 1 / value2;
    }
    // Handles cases where value1 and value2 are both NaN
    return value1 !== value1 && value2 !== value2;
}

// Example usage
console.log(is(25, 25)); // Output: true
console.log(is('foo', 'foo')); // Output: true
console.log(is(null, null)); // Output: true
console.log(is(0, -0)); // Output: false
console.log(is(NaN, NaN)); // Output: true
console.log(is({}, {})); // Output: false

/**
 * Explanation:
 * 
 * The `is` function mimics the behavior of `Object.is()`. 
 * It first checks if the two values are strictly equal using `===`.
 * If they are, it further checks if the values are both `0` and `-0` by comparing `1 / value1` and `1 / value2`.
 * If the values are not strictly equal, it checks if both values are `NaN` by using the fact that `NaN` is not equal to itself.
 */