class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const LEN = heights.length;
        let maxArea = 0;

        const stack = []; // [index, h]

        for(let i = 0; i < LEN; ++i) {
            let start = i;

            while(stack.length && stack.at(-1)[1] > heights[i]) {
                const [index, h] = stack.pop();
                maxArea = Math.max(maxArea, (i - index) * h);
                start = index;
            }

            stack.push([start, heights[i]]);
        }

        for(const [index, h] of stack) {
            maxArea = Math.max(maxArea, (LEN - index) * h);
        }

        return maxArea;
    }
}
