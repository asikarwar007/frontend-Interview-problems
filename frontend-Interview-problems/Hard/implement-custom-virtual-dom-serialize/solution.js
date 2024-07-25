/**
 * Implement Custom Virtual DOM - I (Serialize)
 * 
 * @param {HTMLElement} node - The real DOM node
 * @return {Object} - The virtual DOM tree
 */
function serialize(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue;
    }

    const vnode = {
        tag: node.tagName.toLowerCase(),
        props: {},
        children: []
    };

    for (let attr of node.attributes) {
        vnode.props[attr.name] = attr.value;
    }

    for (let child of node.childNodes) {
        vnode.children.push(serialize(child));
    }

    return vnode;
}

// Example usage
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

/**
 * Explanation:
 * 
 * The `serialize` function converts a real DOM tree into a virtual DOM tree represented as a nested object.
 * It handles element nodes and text nodes, creating a virtual DOM structure with tags, properties, and children.
 * The function recursively traverses the real DOM tree and constructs the virtual DOM tree.
 */