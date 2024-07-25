/**
 * Implement Custom bind() method
 * 
 * @param {Function} func - The function to bind
 * @param {Object} context - The context to bind the function with
 * @param {...*} args - The arguments to partially apply
 * @return {Function} - A new bound function
 */
function customBind(func, context, ...args) {
    return function(...newArgs) {
        return customCall(func, context, ...args, ...newArgs);
    };
}

// Example usage
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloToJohn = customBind(greet, null, 'Hello', 'John');
console.log(sayHelloToJohn()); // Output: 'Hello John'

/**
 * Explanation:
 * 
 * The `customBind` function mimics the behavior of `Function.prototype.bind`.
 * It returns a new function that, when called, invokes the original function with the given context and partially applied arguments.
 * The new function combines the partially applied arguments with any additional arguments provided when it is called.
 */