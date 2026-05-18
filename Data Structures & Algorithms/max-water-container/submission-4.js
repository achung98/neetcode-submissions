class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = -1;

        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            const length = r - l;
            let area = -1;

            if(heights[l] > heights[r]) {
                area = heights[r]*length;
                --r;
            } else {
                area = heights[l]*length;
                ++l;
            }

            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    }
}
