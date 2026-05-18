class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        #brute force
        triplets = set()
        size = len(nums)

        nums.sort()
        for i in range(size):
            for j in range(i + 1, size):
                for k in range(j + 1, size):
                    if(nums[i] + nums[j] + nums[k] == 0):
                        triplets.add((nums[i], nums[j], nums[k]))
        
        return list(map(lambda x: list(x), triplets))
