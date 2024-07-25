# Min By

## Description
Implement a function that finds the minimum element based on the specified criteria.

## Example
```javascript
const arr = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
const criteria = item => item.n;
console.log(minBy(arr, criteria)); // { n: 2 }
```

## Constraints
- The array should not be empty.
- The criteria function should return a value that can be compared.

## Notes
This question tests your understanding of higher-order functions and array manipulation.