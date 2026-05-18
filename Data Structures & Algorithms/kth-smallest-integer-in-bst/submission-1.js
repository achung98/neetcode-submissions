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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = -1;
        let pos = 0;

        const traverse = (node) => {    
            if(node === null) return;

            traverse(node.left);
            ++pos;
            if(pos === k) {
                res = node.val;
                return;
            }
            traverse(node.right);
        }

        traverse(root);

        return res;
    }
}
