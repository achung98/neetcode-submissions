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

        const queue = new Queue([root]);

        const res = [];
        while(!queue.isEmpty()) {
            const level = [];

            const size = queue.size();
            for(let i = 0; i < size; ++i) {
                const node = queue.dequeue();
                if(node.left) queue.enqueue(node.left);
                if(node.right) queue.enqueue(node.right);
                level.push(node.val);
            }
            res.push(level);
        }

        return res;
    }
}
