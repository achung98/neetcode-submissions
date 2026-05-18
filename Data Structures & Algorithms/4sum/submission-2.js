class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);

        const res = [];
        const N = nums.length;

        for(let f = 0; f < N; ++f) {
            if(nums[f] > target) break;
            if(f > 0 && nums[f] === nums[f - 1]) continue;

            let s = f + 1
            while(s < N) {
                let l = s + 1;
                let h = N - 1;

                while(l < h) {
                    const sum = nums[f] + nums[s] + nums[l] + nums[h];
                    if(sum === target) {
                        res.push([nums[f], nums[s],nums[l], nums[h]]);
                        ++l;
                        --h;
                        while(nums[l] === nums[l - 1]) ++l;
                    } else if(sum > target) {
                        --h;
                    } else {
                        ++l;
                    }
                }

                ++s;
                while(nums[s] === nums[s - 1]) ++s;
            }
        }

        return res;
    }
}
