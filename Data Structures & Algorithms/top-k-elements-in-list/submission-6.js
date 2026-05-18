class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = 1 + (count[num] ?? 0);
        }
        
        const unique = Object.keys(count).map(Number);
        const len = unique.length;

        const quickSelect = (left, right) => {
            if (left >= right) return;
            const part = partition(left, right);
            if (part === len - k) return;
            else if (part < len - k) quickSelect(part + 1, right);
            else quickSelect(left, part - 1);
        };

        const partition = (left, right) => {
            const pivot = count[unique[right]];
            let i = left;
            for (let j = left; j < right; j++) {
                if (count[unique[j]] < pivot) {
                    [unique[i], unique[j]] = [unique[j], unique[i]];
                    i++;
                }
            }
            [unique[i], unique[right]] = [unique[right], unique[i]];
            return i;
        };

        quickSelect(0, len - 1);
        return unique.slice(len - k);
    }
}
