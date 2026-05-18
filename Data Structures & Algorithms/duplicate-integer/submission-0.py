class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        size = len(nums)

        for i in range(size):
            for j in range(i+1, size):
                if nums[i] == nums[j]:
                    return True

        return False