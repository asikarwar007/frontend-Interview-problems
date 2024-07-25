# Implement Custom Virtual DOM - I (Serialize)

## Problem Statement
Write a function `serialize` that takes a real DOM tree and converts it into a virtual DOM tree represented as a nested object. The function should create a virtual DOM structure based on the real DOM tree.

## Example
```javascript
const realDOM = document.createElement('div');
realDOM.id = 'root';
const h1 = document.createElement('h1');
h1.textContent = 'Hello, world!';
const p = document.createElement('p');
p.textContent = 'This is a paragraph.';
realDOM.appendChild(h1);
realDOM.appendChild(p);

const virtualDOM = serialize(realDOM);
console.log(virtualDOM);
/* Output:
{
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
}
*/
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `serialize` function should handle creating a virtual DOM structure based on the real DOM tree, including setting properties and handling text content.