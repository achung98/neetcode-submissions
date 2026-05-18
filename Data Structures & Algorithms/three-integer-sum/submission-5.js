class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];
        const N = nums.length

        for(let i = 0; i < N; ++i) {
            if(nums[i] > 0) break;
            if(i > 0 && nums[i - 1] === nums[i]) continue;

            let l = i + 1;
            let h = N - 1;

            while(l < h) {
                const sum = nums[i] + nums[l] + nums[h];

                if(sum === 0) {
                    res.push([nums[i], nums[l], nums[h]]);
                    ++l;
                    --h;

                    while(nums[l - 1] === nums[l]) ++l;
                } else if(sum < 0) {
                    ++l;
                } else {
                    --h;
                }
            }
        }

        return res;
    }
}
