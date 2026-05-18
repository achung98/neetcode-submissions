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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;

        console.log("here")

        for(let i = 1; i < lists.length; ++i) {
            lists[i] = this.merge(lists[i - 1], lists[i]);
        }

        return lists[lists.length - 1];
    }

    merge(list1, list2) {
        let l1 = list1;
        let l2 = list2;
        let dummy = new ListNode(0);
        let track = dummy;

        while(l1 && l2) {
            if(l1.val < l2.val) {
                track.next = l1;
                l1 = l1.next;
            } else {
                track.next = l2;
                l2 = l2.next;
            }
            track = track.next;
        }

        if(l1) track.next = l1;

        if(l2) track.next = l2;

        return dummy.next;
    }
}
