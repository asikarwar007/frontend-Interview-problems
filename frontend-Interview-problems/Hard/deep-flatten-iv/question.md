# Deep Flatten IV

## Problem Statement
Write a function `deepFlatten` that deeply flattens an array of nested arrays and objects. The function should recursively flatten all nested structures within the input array.

## Example
```javascript
console.log(deepFlatten([1, [2, { a: 3, b: [4, 5] }, 6], 7])); 
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log(deepFlatten([{ a: 1 }, [{ b: 2 }, [3, 4]], 5]));
// Output: [1, 2, 3, 4, 5]
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `deepFlatten` function should handle both nested arrays and objects, extracting all values into a single flat array.