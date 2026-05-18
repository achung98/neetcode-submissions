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

        const unique = Object.keys(counter).map(Number)
        const n = unique.length;

        const partition = (l, r) => {
            const pivot = counter[unique[r]];

            let left = l;
            for(let runner = l; runner < r; ++runner) {
                if(pivot > counter[unique[runner]]) {
                    [unique[left], unique[runner]] = [unique[runner], unique[left]];
                    ++left; 
                }
            }
            [unique[left], unique[r]] = [unique[r], unique[left]];

            return left;
        }

        const quickSelect = (l, r) => {
            if(l >= r) return;

            const index = partition(l, r);

            if(n - k === index) return;
            else if(n - k > index) quickSelect(index + 1, r);
            else quickSelect(l, index - 1);
        }

        quickSelect(0, n - 1);

        return unique.slice(n - k);
    }
}
