class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const bt = (i, temp, tempTot) => {
            if(tempTot === target) {
                res.push([...temp]);
                return;
            }

            if(tempTot > target || i > nums.length) return;

            if(tempTot + nums[i] <= target) {
                temp.push(nums[i]);
                bt(i, temp, tempTot + nums[i]);
                temp.pop();
            }

            bt(i + 1, temp, tempTot);
        }

        bt(0, [], 0);

        return res;
    }
}
