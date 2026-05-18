class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trapped = 0;

        let l = 0;
        let r = height.length - 1;

        let leftMax = height[l];
        let rightMax = height[r];

        while(l < r) {
            if(height[l] < height[r]) {
                leftMax = Math.max(leftMax, height[l]);
                trapped += leftMax - height[l];
                ++l;
            } else {
                rightMax = Math.max(rightMax, height[r]);
                trapped += rightMax - height[r];
                --r;
            }
        }

        return trapped;
    }
}
