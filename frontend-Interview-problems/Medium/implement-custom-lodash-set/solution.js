/**
 * Implement Custom lodash _.set()
 * 
 * @param {Object} object - The object to modify
 * @param {string|Array} path - The path to the property
 * @param {*} value - The value to set
 * @return {Object} - The updated object
 */
function customSet(object, path, value) {
    if (typeof path === 'string') {
        path = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    }

    let current = object;
    for (let i = 0; i < path.length; i++) {
        const key = path[i];
        if (i === path.length - 1) {
            current[key] = value;
        } else {
            if (current[key] === undefined) {
                current[key] = {};
            }
            current = current[key];
        }
    }
    return object;
}

// Example usage
const object = { 'a': [{ 'b': { 'c': 3 } }] };

customSet(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // Output: 4

customSet(object, ['a', '0', 'b', 'd'], 5);
console.log(object.a[0].b.d); // Output: 5

/**
 * Explanation:
 * 
 * The `customSet` function mimics the behavior of `_.set` from lodash.
 * It accepts both string and array paths to modify the object.
 * If the path is a string, it converts it to an array using regex to handle bracket notation.
 * It traverses the object along the path, creating intermediate properties if they do not exist, and sets the specified value at the end of the path.
 */