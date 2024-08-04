# Topological Sort

## Description
Implement a function that performs a topological sort.

## Example
```javascript
const graph = {
    'A': ['C'],
    'B': ['C'],
    'C': ['E'],
    'D': ['F'],
    'E': ['H'],
    'F': ['G'],
    'G': ['H'],
    'H': []
};
console.log(topologicalSort(graph)); // ['B', 'A', 'D', 'F', 'C', 'E', 'G', 'H']
```

## Constraints
- The graph is represented as an adjacency list.
- The function should return an array of nodes in topologically sorted order.

## Notes
This question tests your understanding of graph algorithms and topological sorting.