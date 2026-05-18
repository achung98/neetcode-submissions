class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const stack = [];

        // Initial stack values
        for(let i = 0; i < k; ++i) {
            if(stack.length === 0) {
                stack.push([nums[i], i]);
                continue;
            }

            while(stack.length && stack[stack.length - 1][0] <= nums[i]) stack.pop();

            stack.push([nums[i], i]);
        }
        
        let s = 0;
        const res = [stack[0][0]];
        for(let i = k; i < nums.length; ++i) {
            const num = nums[i];

            while(stack.length && stack[stack.length - 1][0] <= num) stack.pop();
            stack.push([num, i]);

            if(stack.length && stack[0][1] === s) stack.shift();

            res.push(stack[0][0]);

            ++s;
        }

        return res;
    }
}
