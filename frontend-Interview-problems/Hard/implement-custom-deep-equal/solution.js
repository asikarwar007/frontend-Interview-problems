/**
 * Implement Custom Deep Equal
 * 
 * @param {*} obj1 - The first value to compare
 * @param {*} obj2 - The second value to compare
 * @return {boolean} - True if the values are deeply equal, false otherwise
 */
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // Output: true
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // Output: true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // Output: false

/**
 * Explanation:
 * 
 * The `deepEqual` function checks for deep equality between two values.
 * It first checks if the values are strictly equal using `===`.
 * If not, it checks if both values are non-null objects.
 * It then compares the keys of both objects and recursively checks for deep equality of each key-value pair.
 */