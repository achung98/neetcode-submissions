class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isAlphaNumeric = (str) => /^[a-z0-9]+$/i.test(str);

        while(l < r) {
            while(l < r && !isAlphaNumeric(s[l])) ++l;
            while(r > l && !isAlphaNumeric(s[r])) --r;

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            ++l;
            --r;
        }

        return true;
    }
}
