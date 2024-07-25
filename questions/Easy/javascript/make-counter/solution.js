/**
 * Make Counter
 * 
 * @param {number} initialValue - The initial value for the counter
 * @return {function} - A function that increments and returns the counter value
 */
function makeCounter(initialValue) {
    let count = initialValue;
    return function() {
        return ++count;
    };
}

// Example usage
const counter = makeCounter(5);
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8

/**
 * Explanation:
 * 
 * The `makeCounter` function accepts an initial value and returns a function that, when called, increments and returns the count.
 * The `count` variable is enclosed within the returned function, forming a closure, which preserves its state across function calls.
 */