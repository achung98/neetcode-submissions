class Solution {
    isAlpha(char) {
        const regex = /^[a-z0-9]$/i;
        return regex.test(char);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while(l < r) {
            // Check until I'm alpha
            while(l < r && !this.isAlpha(s.charAt(l))) { ++l; }
            while(l < r && !this.isAlpha(s.charAt(r))) { --r; }
            
            const charL = s.charAt(l).toLowerCase();
            const charR = s.charAt(r).toLowerCase();

            if(charL !== charR) return false;

            ++l;
            --r;
        }

        return true;
    }
}
