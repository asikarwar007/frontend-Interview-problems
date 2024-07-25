# Cycle

## Description
Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

## Example
```javascript
const cycle = createCycle(1, 2, 3);
console.log(cycle()); // 1
console.log(cycle()); // 2
console.log(cycle()); // 3
console.log(cycle()); // 1
```

## Constraints
- The function should handle any number of arguments.
- The returned function should cycle through the values indefinitely.

## Notes
This question tests your understanding of closures and function scopes.