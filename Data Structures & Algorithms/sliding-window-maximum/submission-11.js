class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        const res = [];

        for(let r = 0; r < nums.length; ++r) {
            while(deque.length && deque.at(-1) < nums[r]) {
                deque.pop();
            }

            deque.push(nums[r]);

            if(r >= k - 1) {
                res.push(deque[0]);

                if(nums[r - k + 1] === deque[0]) {
                    deque.shift();
                }
            }
        }

        return res;
    }
}
