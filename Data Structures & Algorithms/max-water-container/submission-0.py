class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1

        max_area = 0
        while(l != r):
            if heights[l] < heights[r]:
                area = heights[l] * (r - l)
                max_area = max(max_area, area)
                l = l + 1
            else:
                area = heights[r] * (r - l)
                max_area = max(max_area, area)
                r = r - 1

        return max_area