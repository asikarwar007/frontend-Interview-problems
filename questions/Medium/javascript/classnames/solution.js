/**
 * Classnames
 * 
 * @param {...(string|Object|Array)} args - The arguments to join as class names
 * @return {string} - The joined class names
 */
function classnames(...args) {
    return args.reduce((acc, arg) => {
        if (typeof arg === 'string') {
            return acc + ' ' + arg;
        } else if (Array.isArray(arg)) {
            return acc + ' ' + classnames(...arg);
        } else if (typeof arg === 'object') {
            return acc + ' ' + Object.keys(arg).filter(key => arg[key]).join(' ');
        }
        return acc;
    }, '').trim();
}

// Example usage
console.log(classnames('foo', 'bar')); // 'foo bar'
console.log(classnames('foo', { bar: true, baz: false })); // 'foo bar'
console.log(classnames({ foo: true, bar: true })); // 'foo bar'
console.log(classnames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classnames('foo', ['bar', { baz: true }])); // 'foo bar baz'

/**
 * Explanation:
 * 
 * The `classnames` function joins CSS class names together conditionally based on the input arguments.
 * It handles string, object, and array inputs, recursively processing nested arrays and objects.
 * For string inputs, the string is added to the result.
 * For array inputs, the function is called recursively on the array elements.
 * For object inputs, the keys with truthy values are added to the result.
 */