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

        for(let first = 0; first < N; ++first) {
            if(nums[first] > target) break;
            if(first > 0 && nums[first - 1] === nums[first]) continue;

            let second = first + 1;

            while(second < N) {
                let low = second + 1;
                let high = N - 1;

                while(low < high) {
                    const sum = nums[first] + nums[second] + nums[low] + nums[high];

                    if(sum === target) {
                        res.push([nums[first], nums[second], nums[low], nums[high]]);
                        ++low;
                        --high;

                        while(nums[low - 1] === nums[low]) ++low;
                    } else if(sum < target) {
                        ++low;
                    } else {
                        --high;
                    }
                }

                ++second;

                while(nums[second - 1] === nums[second]) ++second; 
            }
        }

        return res;
    }
}
