class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(const s of strs) {
            const res = Array(26).fill(0);
            for(const c of s) {
                ++res[c.charCodeAt(0) - 'a'.charCodeAt(0)];
            }
            const key = res.join(",");
            
            if(key in map) map[key].push(s);
            else map[key] = [s];
        }

        return Object.values(map);
    }
}
