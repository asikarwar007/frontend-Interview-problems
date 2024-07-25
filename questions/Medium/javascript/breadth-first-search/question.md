# Breadth-first Search

## Description
Implement a breadth-first search algorithm that traverses a directed graph in a breadth-first manner.

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
console.log(bfs(graph, 'a')); // ['a', 'b', 'c', 'd', 'e', 'f']
```

## Constraints
- The graph is represented as an adjacency list.
- The function should return an array of nodes in the order they are visited.

## Notes
This question tests your understanding of graph traversal algorithms.