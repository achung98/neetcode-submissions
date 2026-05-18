class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        size = len(nums)
        index_map = {}

        for i in range(size):
            diff = target - nums[i]
            if diff in index_map:
                index = index_map[diff]
                return [i, index] if i < index else [index, i]
            
            index_map[nums[i]] = i

        raise Exception("Something wrong happened")