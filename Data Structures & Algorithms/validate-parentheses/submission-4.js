class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            "}" : "{",
            "]": "[",
            ")": "("
        };

        const res = [];

        for(const ch of s) {
            if(!map[ch]) res.push(ch);
            else {
                if(res.at(-1) === map[ch]) res.pop();
                else return false;
            }
        }

        return res.length === 0;
    }
}
