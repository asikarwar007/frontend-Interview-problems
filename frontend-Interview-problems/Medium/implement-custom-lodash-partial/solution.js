/**
 * Implement Custom lodash _.partial()
 * 
 * @param {Function} func - The function to partially apply arguments to
 * @param {...*} args - The arguments to partially apply
 * @return {Function} - A new function with the partially applied arguments
 */
function customPartial(func, ...args) {
    return function(...remainingArgs) {
        return func(...args, ...remainingArgs);
    };
}

// Example usage
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = customPartial(greet, 'Hello');
console.log(sayHelloTo('John')); // Output: 'Hello John'

/**
 * Explanation:
 * 
 * The `customPartial` function mimics the behavior of `_.partial` from lodash.
 * It returns a new function that, when called, invokes the original function with the partially applied arguments followed by any remaining arguments.
 */