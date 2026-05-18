class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;

        let trapped = 0;
        while(l < r) {
            if(height[l] < height[r]) {
                maxLeft = Math.max(maxLeft, height[l]);
                trapped += maxLeft - height[l];
                ++l;
            } else {
                maxRight = Math.max(maxRight, height[r]);
                trapped += maxRight - height[r];
                --r;
            }
        }

        return trapped;
    }
}
