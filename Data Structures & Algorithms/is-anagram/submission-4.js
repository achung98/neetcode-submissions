class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        if(s === t || (s === "" && t === "")) return true;

        const sKey = this.getKey(s);
        const tKey = this.getKey(t);

        return this.isEqual(sKey, tKey);
    }

    getKey(str) {
        const key = Array(26).fill(0);

        for(let char of str) {
            const i = char.charCodeAt(0) - 'a'.charCodeAt(0);
            key[i] += 1;
        }

        return key;
    }

    isEqual(sKey, tKey) {
        for(let i in sKey) {
            if(sKey[i] !== tKey[i]) return false;
        }

        return true;
    }
}
