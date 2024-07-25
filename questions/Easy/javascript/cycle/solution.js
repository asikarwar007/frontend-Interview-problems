/**
 * Cycle
 * 
 * @param {...*} values - The values to cycle through
 * @return {function} - A function that cycles through the values each time it is called
 */
function createCycle(...values) {
    let index = 0;
    return function() {
        const value = values[index];
        index = (index + 1) % values.length;
        return value;
    };
}

// Example usage
const cycle = createCycle(1, 2, 3);
console.log(cycle()); // 1
console.log(cycle()); // 2
console.log(cycle()); // 3
console.log(cycle()); // 1

/**
 * Explanation:
 * 
 * The `createCycle` function accepts a variable number of arguments and returns a function that cycles through these values.
 * Each time the returned function is called, it returns the next value in the cycle.
 * When the end of the values array is reached, it starts over from the beginning.
 */