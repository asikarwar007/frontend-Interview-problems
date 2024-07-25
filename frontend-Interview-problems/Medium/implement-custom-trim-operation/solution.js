/**
 * Implement Custom trim() operation
 * 
 * @param {string} str - The string to trim
 * @return {string} - The trimmed string
 */
function customTrim(str) {
    let start = 0;
    let end = str.length - 1;

    while (start <= end && /\s/.test(str[start])) {
        start++;
    }
    while (end >= start && /\s/.test(str[end])) {
        end--;
    }

    return str.slice(start, end + 1);
}

// Example usage
console.log(customTrim('   hello world   ')); // Output: 'hello world'
console.log(customTrim('hello world')); // Output: 'hello world'

/**
 * Explanation:
 * 
 * The `customTrim` function mimics the behavior of `String.prototype.trim`.
 * It iterates from the start and end of the string, skipping whitespace characters, and returns the substring between the first and last non-whitespace characters.
 */