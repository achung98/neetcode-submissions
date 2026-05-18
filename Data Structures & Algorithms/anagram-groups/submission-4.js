class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for(const str of strs) {
            const key = this.genKey(str);
            console.log(key)
            
            if(groups.has(key)) groups.get(key).push(str);
            else groups.set(key, [str]);
        }

        return [...groups.values()];
    }

    genKey(str) {
        const key = Array(26).fill(0);
        for(const char of str) {
            const i = char.charCodeAt(0) - 'a'.charCodeAt(0);
            key[i] += 1;
        }

        return key.join("_");
    }
}
