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
    goodNodes(root) {
        let count = 0;

        const traverse = (node, max) => {
            if(node === null) return;

            if(node.val >= max) ++count;
            
            const newMax = Math.max(max, node.val)
            traverse(node.left, newMax);
            traverse(node.right, newMax);
        }

        traverse(root, root.val);

        return count;
    }
}
