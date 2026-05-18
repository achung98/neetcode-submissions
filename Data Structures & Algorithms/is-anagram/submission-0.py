class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        t_sorted = sorted(t)

        return sorted(s) == t_sorted