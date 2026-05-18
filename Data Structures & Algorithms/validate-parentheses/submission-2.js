class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false;

        const st = [];
        const closed = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for(const ch of s) {
            if(!closed[ch]) {
                st.push(ch);
                continue;
            }

            if(closed[ch] !== st[st.length - 1]) return false;

            st.pop();
        }

        return st.length === 0;
    }
}
