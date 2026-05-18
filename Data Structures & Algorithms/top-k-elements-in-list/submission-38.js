class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {};
        for(const num of nums) {
            counter[num] = 1 + (counter[num] ?? 0);
        }

        const unique = Object.keys(counter).map(Number);
        const len = unique.length;

        const partition = (l, r) => {
            const pivot = counter[unique[r]];

            let i = l;

            for(let runner = l; runner < r; ++runner) {
                if(pivot > counter[unique[runner]]) {
                    [unique[i], unique[runner]] = [unique[runner], unique[i]];
                    ++i;
                }
            }

            [unique[i], unique[r]] = [unique[r], unique[i]];

            return i;
        }

        const quickSelect = (l, r) => {
            if(l >= r) return;

            const i = partition(l, r);

            if(i === len - k) return;
            else if (i < len - k) quickSelect(i + 1, r);
            else quickSelect(l, i - 1);
        }

        quickSelect(0, len - 1);

        return unique.slice(len - k);
    }
}
