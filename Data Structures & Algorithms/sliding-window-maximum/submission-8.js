class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let window = [];  // Monotonic decreasing array
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            // Remove all elements smaller than the current number to maintain decreasing order
            while (window.length > 0 && window[window.length - 1] < nums[i]) {
                window.pop();
            }

            // Add the current number to the window
            window.push(nums[i]);

            // When we have processed at least k elements, record the result
            if (i >= k - 1) {
                result.push(window[0]);  // The first element is the max of the window

                // Remove the element that is sliding out of the window
                if (window[0] === nums[i - k + 1]) {
                    window.shift();
                }
            }
        }

        return result;
    }
}
