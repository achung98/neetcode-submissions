class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        products = [1 for _ in nums]
        l = len(nums)

        for i in range(1, l):
            products[i] = products[i-1]*nums[i - 1]

        product = nums[l-1]
        for i in range(l - 2, -1, -1):
            print(i, product)
            products[i] *= product
            product *= nums[i]

        return products