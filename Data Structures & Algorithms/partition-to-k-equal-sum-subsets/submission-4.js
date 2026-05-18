class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        const sum = nums.reduce((prev, curr) => prev + curr, 0);

        if(sum % k !== 0) return false;

        const min = sum / k;

        nums.sort((a, b) => b - a);

        const visited = Array(nums.length).fill(false);

        const dfs = (i, part, sum) => {
            if(part === 0) return true;

            if(sum === min) return dfs(0, part - 1, 0);

            for(let j = i; j < nums.length; ++j) {
                if(!visited[j] && sum + nums[j] <= min) {
                    visited[j] = true;
                    const res = dfs(j + 1, part, sum + nums[j]);
                    if(res) return true;
                    visited[j] = false;
                }
            }

            return false;
        }

        return dfs(0, k, 0);
    }
}
