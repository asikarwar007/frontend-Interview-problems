# Implement Custom trim() operation

## Problem Statement
Write a function `customTrim` that mimics the behavior of `String.prototype.trim`. The function should take a string and remove whitespace from both ends of the string.

## Example
```javascript
console.log(customTrim('   hello world   ')); // Output: 'hello world'
console.log(customTrim('hello world')); // Output: 'hello world'
```

## Constraints
  - Do not use `String.prototype.trim` or any third-party libraries.

## Notes
The `customTrim` function should handle removing whitespace characters from both ends of the input string.