/**
 * Implement Custom Deep Clone
 * 
 * @param {*} value - The value to deep clone
 * @return {*} - The deep cloned value
 */
function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    const result = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            result[key] = deepClone(value[key]);
        }
    }
    return result;
}

// Example usage
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // Output: { a: 1, b: { c: 2 } }
console.log(clone === obj); // Output: false
console.log(clone.b === obj.b); // Output: false

/**
 * Explanation:
 * 
 * The `deepClone` function recursively copies all properties of the input value.
 * It handles both arrays and objects by creating new copies of all nested structures.
 * Primitive values (non-objects) are returned as-is.
 */