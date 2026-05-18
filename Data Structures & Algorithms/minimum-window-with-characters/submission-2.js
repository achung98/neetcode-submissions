class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const map = new Map();

        for (const x of t) {
            map.set(x, (map.get(x) || 0) + 1);
        }

        let matched = 0;
        let minLen = s.length + 1;
        let start = 0;

        let l = 0;
        for(let r in s) {
            const ch = s[r];
            if(map.has(ch)) {
                map.set(ch, map.get(ch) - 1);
                if (map.get(ch) === 0) matched++;
            }

            while(matched === map.size) {
                if(minLen > r - l + 1) {
                    minLen = r - l + 1;
                    start = l;
                }
                const deleted = s[l++];
                if(map.has(deleted)) {
                    if (map.get(deleted) === 0) matched--;
                    map.set(deleted, map.get(deleted) + 1);
                }
            }
        }

        return minLen > s.length ? "" : s.substring(start, minLen + start);
    }

}
