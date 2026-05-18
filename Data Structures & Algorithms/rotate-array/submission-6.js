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
            let lastIndex = i;
            let lastNumber = nums[i];
            let currIndex = i;

            do {
                const n = (currIndex + k) % LEN;
                const prev = nums[n];
                nums[n] = lastNumber;
                currIndex = n;
                lastNumber = prev;
                ++count;
            } while(lastIndex !== currIndex)
        }
    }
}
