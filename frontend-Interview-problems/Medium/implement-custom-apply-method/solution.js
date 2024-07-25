/**
 * Implement Custom apply() method
 * 
 * @param {Function} func - The function to apply
 * @param {Object} context - The context to apply the function with
 * @param {Array} args - The arguments to apply the function with
 * @return {*} - The result of the function call
 */
function customApply(func, context, args) {
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

console.log(customApply(greet, null, ['Hello', 'John'])); // Output: 'Hello John'

/**
 * Explanation:
 * 
 * The `customApply` function mimics the behavior of `Function.prototype.apply`.
 * It temporarily assigns the function to the provided context, calls it with the given arguments array, and then removes the function from the context.
 * This ensures that the function is called with the correct `this` value and arguments.
 */