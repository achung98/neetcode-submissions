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
        let balanced = true;

        const helper = (r) => {
            if(r == null) return 0;

            const left = helper(r.left);
            const right = helper(r.right);

            balanced = balanced && Math.abs(left - right) < 2;

            return 1 + Math.max(left, right);
        }

        helper(root);

        return balanced;
    }
}
