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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let same = true;

        const sameTree = (p, q) => {
            if((p === null && q !== null) || (q == null && p !== null)) {
                same = false;
                return;
            }

            if(p === null && q === null) {
                same = same && true;
                return;
            }
            
            const pVal = p.val;
            const qVal = q.val;
            
            same = same && pVal === qVal;

            sameTree(p.left, q.left);
            sameTree(p.right, q.right);
        }

        sameTree(p, q);

        return same;
    }
}
