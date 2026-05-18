class Solution {
    findMedianSortedArrays(nums1, nums2) {
        let n = nums1;
        let m = nums2;

        if(m.length < n.length) [n, m] = [m, n];

        const len = n.length + m.length;
        const half = Math.floor((len + 1)/2);

        let l = 0;
        let r = n.length;

        while(l <= r) {
            const mid = Math.floor((r + l)/2);
            
            const second = half - mid;

            const midRight = mid === n.length ? +Infinity : n[mid];
            const midLeft = mid === 0 ? -Infinity : n[mid - 1];
            const secondRight = second === m.length ? +Infinity : m[second];
            const secondLeft = second === 0 ? -Infinity : m[second - 1];
               
            if(midRight >= secondLeft && secondRight >= midLeft) {
                if(len % 2) {
                    return Math.max(midLeft, secondLeft);
                } else {
                    return (Math.min(midRight, secondRight) + Math.max(midLeft, secondLeft)) / 2;
                }
            } else if(midRight < secondLeft) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}