class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            // Detects that there is a cycle
            if(slow === fast) break;
        }

        // Finds the entrance of the cycle, which is the duplicate number
        slow = 0;
        while(true) {
            slow = nums[slow];
            fast = nums[fast];

            if(slow === fast) return slow;
        }

        throw new Exception("Invalid");
    }
}
