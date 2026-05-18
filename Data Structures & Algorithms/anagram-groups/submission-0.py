class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = {}
        size = len(strs)

        for s in strs:
            sorted_str = "".join(sorted(s))
            if sorted_str in anagram_groups:
                anagram_groups[sorted_str].append(s)
            else:
                anagram_groups[sorted_str] = [s]

        return anagram_groups.values()

    def is_anagram(self, first, second):
        if len(first) != len(second):
            return False

        count_first, count_second = {}, {}

        for i in range(len(first)):
            count_first[first[i]] = 1 + count_first.get(first[i], 0)
            count_second[second[i]] = 1 + count_second.get(second[i], 0)

        return count_first == count_second
