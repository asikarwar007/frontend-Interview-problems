/**
 * Implement Custom typeof operator
 * 
 * @param {*} value - The value to check the type of
 * @return {string} - The type of the value
 */
function customTypeof(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'object';
    return typeof value;
}

// Example usage
console.log(customTypeof(42)); // Output: 'number'
console.log(customTypeof('Hello')); // Output: 'string'
console.log(customTypeof(true)); // Output: 'boolean'
console.log(customTypeof({})); // Output: 'object'
console.log(customTypeof([])); // Output: 'object'
console.log(customTypeof(null)); // Output: 'null'
console.log(customTypeof(undefined)); // Output: 'undefined'
console.log(customTypeof(() => {})); // Output: 'function'

/**
 * Explanation:
 * 
 * The `customTypeof` function mimics the behavior of the `typeof` operator.
 * It handles the special cases of `null` and arrays correctly.
 * It uses `Array.isArray` to check for arrays and returns 'object' for them.
 * For `null`, it explicitly returns 'null'.
 * For other values, it uses the `typeof` operator.
 */