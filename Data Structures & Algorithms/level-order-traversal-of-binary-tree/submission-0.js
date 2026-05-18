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
        const queue = new Queue([root]);

        while(!queue.isEmpty()) {
            const level = queue.toArray();
            res.push(level.map(l => l.val));
            queue.clear();

            for(const node of level) {
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }

        return res;
    }
}
