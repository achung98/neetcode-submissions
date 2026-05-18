class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closing = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        const p = [];

        for(const c of s) {
            if(c in closing) {
                if(p[p.length - 1] === closing[c]) p.pop();
                else return false;
            } else {
                p.push(c);
            }
        }

        return p.length === 0;
    }
}
