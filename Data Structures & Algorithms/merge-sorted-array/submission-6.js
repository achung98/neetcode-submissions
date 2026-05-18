class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l = m - 1;
        let r = n - 1;
        let mid = m + n - 1;

        while(r >= 0) {
            if(l >= 0 && nums1[l] > nums2[r]) {
                nums1[mid] = nums1[l]
                --l;
            } else {
                nums1[mid] = nums2[r];
                --r;
            }
            --mid;
        }
    }
}
