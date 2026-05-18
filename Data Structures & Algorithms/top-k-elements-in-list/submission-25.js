class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {};

        for(let num of nums) {
            counter[num] = 1 + (counter[num] ?? 0);
        }

        const unique = Object.keys(counter).map(Number);
        const len = unique.length - 1;

        const partition = (l, r) => {
            const pivot = counter[unique[r]];

            let i = l;

            for(let running = l; running < r; ++running) {
                if(pivot > counter[unique[running]]) {
                    [unique[i], unique[running]] = [unique[running], unique[i]];
                    ++i;
                }
            }

            [unique[i], unique[r]] = [unique[r], unique[i]];

            return i;
        }

        const quickSelect = (l, r) => {
            if(l >= r) return;

            let i = partition(l, r);

            if(len - k === i) return;
            else if(len - k > i) quickSelect(i + 1, r);
            else quickSelect(l, i - 1);
        }

        quickSelect(0, len);

        return unique.slice(len - k + 1);
    }
}
