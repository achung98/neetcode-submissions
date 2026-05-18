class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.end = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for(const c of word) {
            const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.children[i] === null) cur.children[i] = new TrieNode();
            cur = cur.children[i];
        }
        cur.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for(const c of word) {
            const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.children[i] === null) return false;
            cur = cur.children[i];
        }
        return cur.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for(const c of prefix) {
            const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.children[i] === null) return false
            cur = cur.children[i];
        }
        
        return true;
    }
}
