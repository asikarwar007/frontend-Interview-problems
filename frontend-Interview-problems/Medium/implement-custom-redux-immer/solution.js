/**
 * Implement Custom Redux used 'Immer' library
 * 
 * @param {Object} baseState - The initial state
 * @param {Function} producer - The producer function to apply changes
 * @return {Object} - The new state with the changes applied immutably
 */
function produce(baseState, producer) {
    const draft = JSON.parse(JSON.stringify(baseState)); // Create a deep clone of the base state
    producer(draft); // Apply changes to the draft
    return draft; // Return the modified draft as the new state
}

// Example usage
const state = { name: 'Alice', age: 25 };
const newState = produce(state, draft => {
  draft.age = 26;
});

console.log(newState); // Output: { name: 'Alice', age: 26 }
console.log(state); // Output: { name: 'Alice', age: 25 } (original state remains unchanged)

/**
 * Explanation:
 * 
 * The `produce` function mimics the behavior of the `produce` function from the `Immer` library.
 * It creates a deep clone of the initial state, applies changes to the clone using the producer function, and returns the modified clone as the new state.
 * The original state remains unchanged, ensuring immutability.
 */