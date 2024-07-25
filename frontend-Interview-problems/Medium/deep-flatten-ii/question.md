# Deep Flatten II

## Problem Statement
Write a function `deepFlatten` that deeply flattens an array of arrays. The function should recursively flatten all nested arrays within the input array. This version should handle sparse arrays as well.

## Example
```javascript
console.log(deepFlatten([1, [2, , [3, [4]], 5]])); 
// Output: [1, 2, 3, 4, 5]

console.log(deepFlatten([[1, 2, [3]], , 4, [5, [6, 7]]])); 
// Output: [1, 2, 3, 4, 5, 6, 7]
```

## Constraints
  - Do not use any third-party libraries.
  
## Notes
Deep flattening an array involves converting nested arrays into a single flat array containing all the elements from the nested arrays, including handling sparse arrays.