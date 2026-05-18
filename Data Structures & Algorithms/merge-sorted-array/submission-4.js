class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let one = m - 1;
        let two = n - 1;
        let last = m + n - 1;

        while(two >= 0) {
            if(one >= 0 && nums1[one] > nums2[two]) {
                nums1[last] = nums1[one];
                --one;
            } else {
                nums1[last] = nums2[two];
                --two;
            }
            --last;
        }
    }
}
