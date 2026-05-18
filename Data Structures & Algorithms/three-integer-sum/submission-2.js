class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const len = nums.length;

        // [-4,-1,-1,0,1,2]
        const res = [];
        for(let i = 0; i < len; i++) {
            if(nums[i] === nums[i - 1]) continue;

            const triplets = this.getTriplets(nums, nums[i], i + 1, len);
            if(triplets.length) res.push(...triplets);
        }

        return res;
    }

    getTriplets(nums, num, l, r) {
        const res = []

        while(l < r) {
            const sum = num + nums[l] + nums[r];

            if(sum === 0) { 
                res.push([num, nums[l], nums[r]]);
                ++l;
                --r;
                while(l < r && nums[l] === nums[l - 1]) ++l;
            }
            else if(sum < 0) ++l;
            else --r;
        }

        return res;
    }
}
