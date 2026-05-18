/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const len = this.getLength(head);
        const pos = len - n;

        if(pos === 0) return head.next;

        let currPos = 1;
        let run = head;
        while(currPos !== pos) {
            ++currPos;
            run = run.next;
        }
        run.next = run.next.next;

        return head;
    }

    getLength(head) {
        let len = 0;

        let curr = head;
        while(curr) {
            ++len;
            curr = curr.next;
        }

        return len;
    }
}
