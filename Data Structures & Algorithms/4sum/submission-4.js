class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);

        const LEN = nums.length;
        const res = [];

        for (let i = 0; i < LEN; ++i) {
            if (nums[i] > target) break;
            if (i > 0 && nums[i - 1] === nums[i]) continue;

            let j = i + 1;

            while(j < LEN) {
                let l = j + 1;
                let r = LEN - 1;

                while (l < r) {
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];

                    if (sum === target) {
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        ++l;
                        --r;

                        while(nums[l - 1] === nums[l]) ++l;
                    } else if(sum > target) {
                        --r;
                    } else {
                        ++l;
                    }
                }

                ++j;

                while(nums[j - 1] === nums[j]) ++j;
            }
        }

        return res;
    }
}
