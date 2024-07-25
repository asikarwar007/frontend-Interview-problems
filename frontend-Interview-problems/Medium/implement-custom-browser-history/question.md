# Implement Custom Browser History

## Problem Statement
Write a class `CustomHistory` that mimics the behavior of browser history. The class should have methods `push`, `back`, `forward`, and `getCurrent` to navigate through the history stack.

## Example
```javascript
const history = new CustomHistory();

history.push('/page1');
history.push('/page2');
console.log(history.getCurrent()); // Output: '/page2'
history.back();
console.log(history.getCurrent()); // Output: '/page1'
history.forward();
console.log(history.getCurrent()); // Output: '/page2'
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `CustomHistory` class should handle the history stack correctly, including the ability to navigate back and forth.