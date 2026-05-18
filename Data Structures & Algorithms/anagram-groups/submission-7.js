class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const store = {};

      for(const s of strs) {
        const key = Array(26).fill(0);
        for(const c of s) {
            ++key[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        const keyStr = key.join(",");
        (store[keyStr] ||= []).push(s);
      }

      return Object.values(store);
    }
}
