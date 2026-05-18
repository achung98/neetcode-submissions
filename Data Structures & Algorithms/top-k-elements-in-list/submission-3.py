class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = defaultdict(int)
        occ = [[] for i in range(len(nums) + 1)]

        for num in nums:
            count[num] += 1
        
        for num, c in count.items():
            print(num)
            occ[c].append(num)
            
        res = []
        for i in range(len(occ) - 1, 0, -1):
            for n in occ[i]:
                res.append(n)
                if len(res) == k:
                    return res