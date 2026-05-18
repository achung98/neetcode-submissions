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

        const good = (node, max) => {
            if(node === null) return;

            if(node.val >= max) ++count;

            const newMax = Math.max(node.val, max);
            good(node.left, newMax);
            good(node.right, newMax);
        }

        good(root, root.val);

        return count;
    }
}
