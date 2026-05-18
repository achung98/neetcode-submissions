class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(let s of strs) {
            const key = Array(26).fill(0);
            for(let c of s) {
                const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                ++key[i];
            }
            const keyStr = key.join(",");

            if(keyStr in groups) groups[keyStr].push(s);
            else groups[keyStr] = [s];
        }
        return Object.values(groups);
    }
}
