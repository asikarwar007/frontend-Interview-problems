# Make Counter

## Description
Implement a function that accepts an integer value and returns a function that can be repeatedly called to return increasing values.

## Example
```javascript
const counter = makeCounter(5);
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
```

## Constraints
  - The initial value passed to the function should be an integer.

## Notes
This question tests your understanding of closures and function scopes.