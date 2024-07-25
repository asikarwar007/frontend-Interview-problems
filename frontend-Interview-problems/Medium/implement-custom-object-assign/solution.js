/**
 * Implement Custom Object.assign
 * 
 * @param {Object} target - The target object
 * @param {...Object} sources - The source objects
 * @return {Object} - The target object with properties copied from the source objects
 */
function customAssign(target, ...sources) {
    sources.forEach(source => {
        if (source && typeof source === 'object') {
            Object.keys(source).forEach(key => {
                target[key] = source[key];
            });
        }
    });
    return target;
}

// Example usage
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

console.log(customAssign(target, source1, source2)); 
// Output: { a: 1, b: 2, c: 3 }

/**
 * Explanation:
 * 
 * The `customAssign` function mimics the behavior of `Object.assign`.
 * It iterates over the source objects and copies their properties to the target object.
 * If a source object has a property with the same key as the target object, the target object's property is overwritten.
 */