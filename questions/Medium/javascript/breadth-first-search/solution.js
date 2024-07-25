/**
 * Breadth-first Search
 * 
 * @param {Object} graph - The graph represented as an adjacency list
 * @param {string} startNode - The starting node for the traversal
 * @return {Array<string>} - The nodes in the order they are visited
 */
function bfs(graph, startNode) {
    const queue = [startNode];
    const visited = new Set();
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            queue.push(...graph[node]);
        }
    }

    return result;
}

// Example usage
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
console.log(bfs(graph, 'a')); // ['a', 'b', 'c', 'd', 'e', 'f']

/**
 * Explanation:
 * 
 * The `bfs` function performs a breadth-first search on a graph represented as an adjacency list.
 * It uses a queue to keep track of nodes to be visited and a set to keep track of visited nodes.
 * Starting from the `startNode`, it visits each node, adds it to the result array, and enqueues its neighbors.
 * This process continues until all reachable nodes are visited.
 */