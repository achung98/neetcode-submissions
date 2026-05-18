class Solution {
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1;
        let b = nums2;

        // Ensure 'a' is the shorter array
        if (b.length < a.length) {
            [a, b] = [b, a];
        }

        const total = a.length + b.length;
        const half = Math.floor((total + 1) / 2); // Correct half calculation

        let left = 0;
        let right = a.length; // Correct binary search bounds

        while (left <= right) {
            const i = Math.floor((left + right) / 2); // Partition point in 'a'
            const j = half - i; // Corresponding partition point in 'b'

            // Handle edge cases for 'a'
            const aLeft = (i === 0) ? -Infinity : a[i - 1];
            const aRight = (i === a.length) ? Infinity : a[i];

            // Handle edge cases for 'b'
            const bLeft = (j === 0) ? -Infinity : b[j - 1];
            const bRight = (j === b.length) ? Infinity : b[j];

            // Check if the partition is valid
            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 === 1) {
                    // Odd total length: median is the max of left partitions
                    return Math.max(aLeft, bLeft);
                } else {
                    // Even total length: average of max left and min right
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else if (aLeft > bRight) {
                // Move partition left in 'a'
                right = i - 1;
            } else {
                // Move partition right in 'a'
                left = i + 1;
            }
        }

        return -1; // This line is theoretically unreachable with valid inputs
    }
}