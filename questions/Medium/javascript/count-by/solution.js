/**
 * Count By
 * 
 * @param {Array} arr - The array to count elements in
 * @param {function|string} criteria - The criteria function or property name to count by
 * @return {Object} - An object with counts of elements based on the criteria
 */
function countBy(arr, criteria) {
    const result = {};
    const getKey = typeof criteria === 'function' ? criteria : item => item[criteria];

    for (const item of arr) {
        const key = getKey(item);
        result[key] = (result[key] || 0) + 1;
    }

    return result;
}

// Example usage
const arr = ['apple', 'banana', 'cherry', 'apple'];
const criteria = item => item.length;
console.log(countBy(arr, criteria)); // { '5': 3, '6': 1 }

/**
 * Explanation:
 * 
 * The `countBy` function counts the number of times elements in an array meet a certain criteria.
 * The criteria can be a function or a property name. It returns an object with the counts of elements based on the criteria.
 * If a function is provided as the criteria, it is used to compute the key for each element.
 * If a string is provided as the criteria, it is used as a property name to compute the key for each element.
 */