class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const stack = [];

        const res = [];

        for(let r = 0; r < nums.length; ++r) {
            while(stack.length && stack.at(-1) < nums[r]) {
                stack.pop();
            }

            stack.push(nums[r]);

            if(r >= k - 1) {
                res.push(stack[0]);
                if(stack[0] === nums[r - k + 1]) stack.shift();
            }
        }

        return res;
    }
}
