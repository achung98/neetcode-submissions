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
            let initialIndex = i;
            let initialNum = nums[i];
            let currentIndex = i;

            do {
                const newIndex = (currentIndex + k) % LEN
                const prev = nums[newIndex];
                nums[newIndex] = initialNum;
                initialNum = prev;
                currentIndex = newIndex;
                ++count;
            } while(initialIndex !== currentIndex)
        }
    }
}
