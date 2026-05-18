import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        ans = []
        count, freq = {}, [[] for _ in range(len(nums) + 1)]

        for num in nums:
            count[num] = 1 + count[num] if num in count else 1

        for key, value in count.items():
            freq[value].append(key)

        
        for i in range(len(freq) - 1, -1, -1):
            for val in freq[i]:
                ans.append(val)
                if len(ans) == k:
                    return ans

        raise Exception("ERROR")

