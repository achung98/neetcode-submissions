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
    isValidBST(root) {
        return this.validate(root, -Infinity, Infinity);
    }
    
    validate(node, min, max) {
        if (node === null) return true; // Base case: empty tree is valid
    
        // Check if the current node's value is within the valid range
        if (node.val <= min || node.val >= max) return false;
    
        // Recursively check the left and right subtrees
        return (
            this.validate(node.left, min, node.val) && // Left subtree must be < node.val
            this.validate(node.right, node.val, max)   // Right subtree must be > node.val
        );
    }
}

