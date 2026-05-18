class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        size = len(nums)

        for i in range(size):
            for j in range(i + 1, size):
                s = nums[i] + nums[j]
                if s == target:
                    return [i, j]

        raise Exception("Something wrong happened")