class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const bt = (i, temp) => {
            if(i >= nums.length) {
                res.push([...temp]);
                return;
            }

            temp.push(nums[i]);
            bt(i + 1, temp);
            temp.pop();

            bt(i + 1, temp);
        }

        bt(0, []);

        return res;
    }
}
