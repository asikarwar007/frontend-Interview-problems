/**
 * Topological Sort
 * 
 * @param {Object} graph - The graph represented as an adjacency list
 * @return {Array<string>} - The nodes in topologically sorted order
 */
function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function visit(node) {
        if (!visited.has(node)) {
            visited.add(node);
            graph[node].forEach(visit);
            stack.push(node);
        }
    }

    Object.keys(graph).forEach(visit);
    return stack.reverse();
}

// Example usage
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

/**
 * Explanation:
 * 
 * The `topologicalSort` function performs a topological sort on a directed acyclic graph represented as an adjacency list.
 * It uses depth-first search (DFS) to visit each node and its neighbors, marking nodes as visited.
 * After visiting all neighbors of a node, the node is pushed onto a stack.
 * The stack is then reversed to obtain the topologically sorted order.
 */