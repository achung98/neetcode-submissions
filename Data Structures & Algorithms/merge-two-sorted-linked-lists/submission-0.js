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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newList = new ListNode();
        let track = newList;

        while(list1 && list2) {
            if(list1.val < list2.val) {
                track.next = list1;
                list1 = list1.next;
            }
            else {
                track.next = list2;
                list2 = list2.next;
            }

            track = track.next;
        }

        if(list1) track.next = list1;
        else track.next = list2;

        return newList.next;
    }
}
