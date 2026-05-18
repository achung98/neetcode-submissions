class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trapped = 0;

        let l = 0;
        let r = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        while(l < r) {
            if(height[l] < height[r]) {
                const h = Math.max(leftMax, height[l]);
                trapped += h - height[l];
                leftMax = h;
                ++l;
            } else {
                const h = Math.max(rightMax, height[r]);
                trapped += h - height[r];
                rightMax = h;
                --r;
            }
        }

        return trapped;
    }
}
