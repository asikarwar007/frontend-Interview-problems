# Count By

## Description
Implement a function that counts the number of times a value appears in an array based on a function or property name.

## Example
```javascript
const arr = ['apple', 'banana', 'cherry', 'apple'];
const criteria = item => item.length;
console.log(countBy(arr, criteria)); // { '5': 3, '6': 1 }
```

## Constraints
- The array can contain any type of elements.
- The criteria function should return a value that can be used as a key in an object.

## Notes
This question tests your understanding of higher-order functions and object manipulation.