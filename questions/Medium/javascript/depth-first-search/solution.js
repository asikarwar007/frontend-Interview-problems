/**
 * Depth-first Search
 * 
 * @param {Object} graph - The graph represented as an adjacency list
 * @param {string} startNode - The starting node for the traversal
 * @return {Array<string>} - The nodes in the order they are visited
 */
function dfs(graph, startNode) {
    const stack = [startNode];
    const visited = new Set();
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            stack.push(...graph[node].reverse());
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
console.log(dfs(graph, 'a')); // ['a', 'b', 'd', 'f', 'c', 'e']

/**
 * Explanation:
 * 
 * The `dfs` function performs a depth-first search on a graph represented as an adjacency list.
 * It uses a stack to keep track of nodes to be visited and a set to keep track of visited nodes.
 * Starting from the `startNode`, it visits each node, adds it to the result array, and pushes its neighbors onto the stack in reverse order.
 * This process continues until all reachable nodes are visited.
 */