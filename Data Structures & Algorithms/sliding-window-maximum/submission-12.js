class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const max = new Deque();
        
        const res = [];

        let l = 0;
        for(let r = 0; r < nums.length; ++r) {
            const curr = nums[r];
            while(max.size() && max.back() < curr) {
                max.popBack();
            }
            max.pushBack(curr);

            if(r - l + 1 === k) {
                const front = max.front();

                res.push(front);

                if(nums[l] === front) {
                    max.popFront();
                }

                ++l;
            }
        }

        return res;
    }
}
