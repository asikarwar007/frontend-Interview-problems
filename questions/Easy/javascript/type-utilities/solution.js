/**
 * Type Utilities
 * 
 * Utility functions to determine primitive variable types in JavaScript.
 */

/**
 * Check if a value is a string
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is a string, false otherwise
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * Check if a value is a number
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is a number, false otherwise
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * Check if a value is a boolean
 * @param {*} value - The value to check
 * @return {boolean} - True if the value is a boolean, false otherwise
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

// Example usage
console.log(isString('hello')); // true
console.log(isNumber(123)); // true
console.log(isBoolean(false)); // true

/**
 * Explanation:
 * 
 * The `isString`, `isNumber`, and `isBoolean` functions are type utilities that check the type of a given value.
 * - `isString` returns true if the value is a string.
 * - `isNumber` returns true if the value is a number.
 * - `isBoolean` returns true if the value is a boolean.
 * These functions utilize the `typeof` operator to determine the type of the value.
 */