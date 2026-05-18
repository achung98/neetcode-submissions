class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isPalindrome = (l, r) => {
            while(l < r) {
                if(s[l] !== s[r]) return false;

                ++l;
                --r;
            }

            return true;
        }

        while(l < r) {
            if(s[l] !== s[r]) {
                return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
            }

            ++l;
            --r;
        }

        return true;
    }
}
