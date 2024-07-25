# Implement Custom Virtual DOM - II (Deserialize)

## Problem Statement
Write a function `deserialize` that takes a virtual DOM tree represented as a nested object and converts it back into a real DOM tree. The function should create DOM elements based on the structure of the virtual DOM tree.

## Example
```javascript
const virtualDOM = {
  tag: 'div',
  props: { id: 'root' },
  children: [
    {
      tag: 'h1',
      props: {},
      children: ['Hello, world!']
    },
    {
      tag: 'p',
      props: {},
      children: ['This is a paragraph.']
    }
  ]
};

const realDOM = deserialize(virtualDOM);
document.body.appendChild(realDOM); // Appends the real DOM tree to the document body
```
## Constraints
  - Do not use any third-party libraries.

## Notes
The `deserialize` function should handle creating DOM elements based on the structure of the virtual DOM tree and should correctly set properties and append children.