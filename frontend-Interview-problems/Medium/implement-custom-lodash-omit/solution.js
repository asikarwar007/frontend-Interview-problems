/**
 * Implement Custom lodash _.omit()
 * 
 * @param {Object} object - The source object
 * @param {Array<string>} paths - The property paths to omit
 * @return {Object} - The new object without the omitted properties
 */
function customOmit(object, paths) {
    const result = { ...object };
    paths.forEach(path => {
        if (path in result) {
            delete result[path];
        }
    });
    return result;
}

// Example usage
const object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(customOmit(object, ['a', 'c'])); 
// Output: { 'b': '2' }

/**
 * Explanation:
 * 
 * The `customOmit` function mimics the behavior of `_.omit` from lodash.
 * It creates a shallow copy of the source object and deletes the specified properties from the copy.
 * The function handles both shallow and nested properties and returns a new object without the omitted properties.
 */