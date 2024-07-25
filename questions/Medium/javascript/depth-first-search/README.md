# Depth-first Search

## Description
Implement a depth-first search algorithm that traverses a directed graph in a depth-first manner.

## Example
```javascript
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
console.log(dfs(graph, 'a')); // ['a', 'b', 'd', 'f', 'c', 'e']
```

## Constraints
- The graph is represented as an adjacency list.
- The function should return an array of nodes in the order they are visited.

## Notes
This question tests your understanding of graph traversal algorithms.
