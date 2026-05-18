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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;

        const balanced = (node) => {
            if(node === null) return 0;

            const left = balanced(node.left);
            const right = balanced(node.right);

            res &&= Math.abs(left - right) <= 1;

            return 1 + Math.max(left, right);
        }

        balanced(root);

        return res;
    }
}
