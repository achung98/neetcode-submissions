class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        letters_count = {}

        for l_s in s:
            if(l_s in letters_count):
                letters_count[l_s] += 1
            else:
                letters_count[l_s] = 1

        for t_s in t:
            if(t_s in letters_count):
                letters_count[t_s] -= 1
            else:
                return False

        return all(value == 0 for value in letters_count.values())