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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];

        const res = [];

        const level = (node, depth) => {
            if(node === null) return;

            if(res.length === depth) {
                res.push([]);
            }

            res[depth].push(node.val);

            level(node.left, depth + 1);
            level(node.right, depth + 1);
        }

        level(root, 0);

        return res;
    }
}
