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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;

        let res = new ListNode();
        let dummy = res;
        let first = l1;
        let second = l2;

        while(first && second) {
            let sum = first.val + second.val + carry;
            if(sum >= 10) {
                carry = 1;
                sum %= 10;
            } else carry = 0;

            dummy.next = new ListNode(sum);

            dummy = dummy.next;
            first = first.next;
            second = second.next;
        }

        while(first) {
            let sum = first.val + carry;
            if(sum >= 10) {
                carry = 1;
                sum %= 10;
            } else carry = 0;

            dummy.next = new ListNode(sum);

            dummy = dummy.next;
            first = first.next;
        }

        while(second) {
            let sum = second.val + carry;
            if(sum >= 10) {
                carry = 1;
                sum %= 10;
            } else carry = 0;

            dummy.next = new ListNode(sum);

            dummy = dummy.next;
            second = second.next;
        }

        if(carry == 1)
            dummy.next = new ListNode(carry);

        return res.next;
    }
}
