class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let count = 0;
        const LEN = nums.length;

        for(let i = 0; count < LEN; ++i) {
            let initialIdx = i;
            let currIdx = i;
            let currNum = nums[i];

            do {
                const n = (currIdx + k) % LEN;
                const temp = nums[n];
                nums[n] = currNum;
                currIdx = n;
                currNum = temp;
                ++count;
            } while(initialIdx !== currIdx)
        }
    }
}
