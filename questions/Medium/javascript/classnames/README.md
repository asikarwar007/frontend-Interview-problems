# Classnames

## Description
Implement a function that conditionally joins CSS class names together.

## Example
```javascript
console.log(classnames('foo', 'bar')); // 'foo bar'
console.log(classnames('foo', { bar: true, baz: false })); // 'foo bar'
console.log(classnames({ foo: true, bar: true })); // 'foo bar'
console.log(classnames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classnames('foo', ['bar', { baz: true }])); // 'foo bar baz'
```

## Constraints
The function should handle string, object, and array inputs.

## Notes
This question tests your understanding of string manipulation and conditional logic.