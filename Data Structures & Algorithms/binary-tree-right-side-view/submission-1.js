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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];

        const rightSide = (node, depth) => {
            if(node === null) return;

            if(res.length === depth) res.push(node.val);

            rightSide(node.right, depth + 1);
            rightSide(node.left, depth + 1);
        }

        rightSide(root, 0);

        return res;
    }
}
