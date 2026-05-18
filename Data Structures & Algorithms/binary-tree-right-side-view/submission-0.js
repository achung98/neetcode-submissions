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
        if(root === null) return [];

        const res = [];
        const queue = new Queue([root]);

        while(!queue.isEmpty()) {
            res.push(queue.back().val);

            const size = queue.size();
            for(let i = 0; i < size; ++i) {
                const node = queue.pop();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }

        return res;
    }
}
