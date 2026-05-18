/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;

        const dfs = (node) => {
            if(node === null) return 0;

            const left = Math.max(dfs(node.left), 0);
            const right = Math.max(dfs(node.right), 0);

            max = Math.max(max, node.val + left + right);

            return node.val + Math.max(left, right)
        }

        dfs(root);

        return max;
    }
}
