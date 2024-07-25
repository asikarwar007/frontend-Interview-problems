/**
 * Implement Custom lodash _.get()
 * 
 * @param {Object} object - The object to query
 * @param {string|Array} path - The path to the property
 * @param {*} [defaultValue] - The value returned if the resolved value is undefined
 * @return {*} - The resolved value
 */
function customGet(object, path, defaultValue) {
    if (typeof path === 'string') {
        path = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    }

    let result = object;
    for (let key of path) {
        result = result == null ? undefined : result[key];
        if (result === undefined) {
            return defaultValue;
        }
    }
    return result;
}

// Example usage
const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(customGet(object, 'a[0].b.c')); // Output: 3
console.log(customGet(object, ['a', '0', 'b', 'c'])); // Output: 3
console.log(customGet(object, 'a.b.c', 'default')); // Output: 'default'

/**
 * Explanation:
 * 
 * The `customGet` function mimics the behavior of `_.get` from lodash.
 * It accepts both string and array paths to query the object.
 * If the path is a string, it converts it to an array using regex to handle bracket notation.
 * It traverses the object along the path, returning the resolved value or the default value if the path does not exist.
 */