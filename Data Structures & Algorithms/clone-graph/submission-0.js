/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const visited = new Map();

        const dfs = (node) => {
            if(!node) return null;

            if(visited.has(node)) return visited.get(node);

            const newNode = new Node(node.val);

            visited.set(node, newNode)

            for(const neighbor of node.neighbors) {
                const newNeighbor = dfs(neighbor);
                newNode.neighbors.push(newNeighbor);
            }

            return newNode;
        }

        return dfs(node);
    }
}
