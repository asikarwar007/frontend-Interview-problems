/**
 * Implement Custom JSON.stringify
 * 
 * @param {*} value - The value to stringify
 * @return {string} - The JSON string representation of the value
 */
function customStringify(value) {
    if (value === null) {
        return 'null';
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    if (Array.isArray(value)) {
        const arrayValues = value.map(item => customStringify(item)).join(',');
        return `[${arrayValues}]`;
    }
    if (typeof value === 'object') {
        const objectValues = Object.keys(value)
            .map(key => `"${key}":${customStringify(value[key])}`)
            .join(',');
        return `{${objectValues}}`;
    }
    return undefined;
}

// Example usage
console.log(customStringify({ a: 1, b: 'test', c: true }));
// Output: '{"a":1,"b":"test","c":true}'

console.log(customStringify([1, 'test', true]));
// Output: '[1,"test",true]'

/**
 * Explanation:
 * 
 * The `customStringify` function mimics the behavior of `JSON.stringify`.
 * It handles different types of values (null, number, boolean, string, array, object) and converts them to their JSON string representation.
 * It uses recursion to handle nested objects and arrays.
 */