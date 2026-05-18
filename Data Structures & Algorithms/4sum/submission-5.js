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

        for(let first = 0; first < LEN; ++first) {
            if(nums[first] > target) break;
            if(first > 0 && nums[first] === nums[first - 1]) continue;

            let second = first + 1;
            
            while(second < LEN) {
                let third = second + 1;
                let fourth = LEN - 1;

                while(third < fourth) {
                    const sum = nums[first] + nums[second] + nums[third] + nums[fourth];

                    if(sum === target) {
                        res.push([nums[first], nums[second], nums[third], nums[fourth]]);
                        ++third;
                        --fourth;

                        while(nums[third] === nums[third - 1]) ++third;
                    } else if(sum < target) {
                        ++third;
                    } else {
                        --fourth;
                    }
                }
                
                ++second;
                while(nums[second] === nums[second - 1]) ++second;
            }
        }

        return res;
    }
}
