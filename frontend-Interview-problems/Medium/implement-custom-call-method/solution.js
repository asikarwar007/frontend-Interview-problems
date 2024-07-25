/**
 * Implement Custom call() method
 * 
 * @param {Function} func - The function to call
 * @param {Object} context - The context to call the function with
 * @param {...*} args - The arguments to call the function with
 * @return {*} - The result of the function call
 */
function customCall(func, context, ...args) {
    context = context || globalThis;
    const fnKey = Symbol();
    context[fnKey] = func;
    const result = context[fnKey](...args);
    delete context[fnKey];
    return result;
}

// Example usage
function greet(greeting, name) {
  return greeting + ' ' + name;
}

console.log(customCall(greet, null, 'Hello', 'John')); // Output: 'Hello John'

/**
 * Explanation:
 * 
 * The `customCall` function mimics the behavior of `Function.prototype.call`.
 * It temporarily assigns the function to the provided context, calls it with the given arguments, and then removes the function from the context.
 * This ensures that the function is called with the correct `this` value and arguments.
 */