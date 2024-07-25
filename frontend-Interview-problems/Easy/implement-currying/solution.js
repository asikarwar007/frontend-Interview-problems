/**
 * Implement Currying
 * 
 * @param {Function} func - The function to curry
 * @return {Function} - A curried version of the given function
 */
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// Example usage
function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // 3

/**
 * Explanation:
 * 
 * The `curry` function checks if the number of provided arguments is sufficient
 * to call the original function `func`. If so, it calls `func` with the provided
 * arguments. If not, it returns another function that accepts the remaining
 * arguments. This process continues until all arguments are provided.
 */