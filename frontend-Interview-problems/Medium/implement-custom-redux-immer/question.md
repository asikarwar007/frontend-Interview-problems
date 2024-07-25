# Implement Custom Redux used 'Immer' library

## Problem Statement
Write a function `produce` that mimics the behavior of the `produce` function from the `Immer` library used in Redux. The function should take an initial state and a producer function, and return a new state with the changes applied immutably.

## Example
```javascript
const state = { name: 'Alice', age: 25 };
const newState = produce(state, draft => {
  draft.age = 26;
});

console.log(newState); // Output: { name: 'Alice', age: 26 }
console.log(state); // Output: { name: 'Alice', age: 25 } (original state remains unchanged)
```

## Constraints
  - Do not use the `Immer` library or any third-party libraries.

## Notes
The `produce` function should handle creating a draft state and applying changes to it immutably, similar to the behavior of the `Immer` library.