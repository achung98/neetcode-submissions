class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    static LEN = 10000;

    constructor() {
        this.hashSet = Array.from({length: MyHashSet.LEN}, () => new ListNode(0));
    }

    hash(key) {
        return key % MyHashSet.LEN;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let cur = this.hashSet[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.hashSet[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let cur = this.hashSet[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
