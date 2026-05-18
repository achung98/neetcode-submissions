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
    diameterOfBinaryTree(root) {
        let res = 0;

        const diameter = (node) => {
            if(node === null) return 0;

            const left = diameter(node.left);
            const right = diameter(node.right);

            res = Math.max(res, left + right);

            return 1 + Math.max(left, right);
        }

        diameter(root);

        return res;
    }
}
