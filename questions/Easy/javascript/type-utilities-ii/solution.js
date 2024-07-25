/**
 * Type Utilities II
 * 
 * Utility functions to determine non-primitive variable types in JavaScript.
 */

/**
 * Check if a value is an array
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is an array, false otherwise
 */
function isArray(value) {
    return Array.isArray(value);
}

/**
 * Check if a value is an object
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is an object, false otherwise
 */
function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Check if a value is a function
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is a function, false otherwise
 */
function isFunction(value) {
    return typeof value === 'function';
}

// Example usage
console.log(isArray([1, 2, 3])); // true
console.log(isObject({ a: 1 })); // true
console.log(isFunction(function() {})); // true

/**
 * Explanation:
 * 
 * The `isArray`, `isObject`, and `isFunction` functions are type utilities that check the type of a given value.
 * - `isArray` returns true if the value is an array using `Array.isArray`.
 * - `isObject` returns true if the value is an object but not an array or null.
 * - `isFunction` returns true if the value is a function using `typeof`.
 */