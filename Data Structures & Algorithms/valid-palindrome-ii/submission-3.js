class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isPalindrome = (left, right) => {
            while(left < right) {
                if(s[left] !== s[right]) return false;
                
                ++left;
                --right;
            }

            return true;
        }

        while(l < r) {
            if(s[l] !== s[r]) {
                return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
            }

            ++l,
            --r;
        }

        return true;
    }
}
