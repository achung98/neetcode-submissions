class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)

        if not nums:
            return 0

        longest = 1
        for num in nums:
            count = 1
            next_ele = num + 1
        
            while(next_ele in seen):
                count += 1
                next_ele += 1
            
            longest = max(count, longest)
        
        return longest