class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const maxLeft = new Array(n).fill(0);
        const maxRight = new Array(n).fill(0);
        const mins = [];
        
        maxLeft[0] = height[0];
        for(let i = 1; i < n; ++i) {
            maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);;
        }

        maxRight[n - 1] = height[n - 1];
        for(let i = n - 2; i >= 0; --i) {
            maxRight[i] = Math.max(maxRight[i + 1], height[i]);;
        }

        for(let i = 0; i < n; ++i) {
            mins[i] = Math.min(maxLeft[i], maxRight[i]);
        }

        let res = 0;
        for(let i = 0; i < n; ++i) {
            if(mins[i] > height[i]) {
                res += mins[i] - height[i];
            }
        }

        return res;
    }
}
