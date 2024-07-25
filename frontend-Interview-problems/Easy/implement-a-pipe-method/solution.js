/**
 * Implement a Pipe Method
 * 
 * @param {...Function} funcs - The functions to pipe
 * @return {Function} - A function that runs the piped functions in sequence
 */
function pipe(...funcs) {
    return function(value) {
        return funcs.reduce((acc, func) => func(acc), value);
    };
}

// Example usage
const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

const pipedFunction = pipe(add, multiply, subtract);
console.log(pipedFunction(5)); // Output: 9 ((5 + 1) * 2 - 3)

/**
 * Explanation:
 * 
 * The `pipe` function takes any number of functions as arguments and returns a new function.
 * When this new function is called with a value, it passes the value through the pipeline
 * of functions using the `reduce` method. Each function in the pipeline is called with the
 * output of the previous function.
 */