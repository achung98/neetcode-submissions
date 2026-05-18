class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const LEN = nums.length;
        let count = 0;

        for(let i = 0; count < LEN; ++i) {
            let latestIdx = i;
            let latest = nums[i];
            let currentIdx = i;

            do {
                const n = (currentIdx + k) % LEN;
                const temp = nums[n];
                nums[n] = latest;
                currentIdx = n;
                latest = temp;
                ++count; 
            } while (latestIdx !== currentIdx)
        }
    }
}
