class Solution:
    def isPalindrome(self, s: str) -> bool:
        size = len(s) - 1
        i, j = 0, size
        
        if not size:
            return True

        while(i <= j):
            if(not s[i].isalnum()): 
                i += 1
                continue
            if(not s[j].isalnum()): 
                j -= 1
                continue

            first = s[i].lower()
            last = s[j].lower()

            if first != last:
                return False

            i += 1
            j -= 1
        
        return True

