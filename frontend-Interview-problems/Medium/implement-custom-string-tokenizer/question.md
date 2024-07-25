# Implement Custom String Tokenizer

## Problem Statement
Write a function `tokenizeString` that takes a string and a delimiter, and returns an array of tokens split by the delimiter. The function should handle multiple consecutive delimiters and trim whitespace from tokens.

## Example
```javascript
console.log(tokenizeString("hello, world,,  this is , , a test", ","));
// Output: ["hello", "world", "this is", "a test"]
```

## Constraints
  - Do not use `String.prototype.split` or any third-party libraries.

## Notes
The `tokenizeString` function should handle cases where there are multiple consecutive delimiters and should trim whitespace from each token.