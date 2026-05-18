class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const getFrequencies = () => {
            const freq = {}
            for(const num of nums) {
                freq[num] = 1 + (freq[num] || 0);
            }

            return freq;
        }

        const freq = getFrequencies(nums);
        const unique = Object.keys(freq).map(Number);
        const n = unique.length;

        const partition = (l, r) => {
            const pivot = freq[unique[r]];

            let left = l;
            for(let runner = l; runner < r; ++runner) {
                if(pivot > freq[unique[runner]]) {
                    [unique[left], unique[runner]] = [unique[runner], unique[left]];
                    ++left; 
                }
            }

            [unique[left], unique[r]] = [unique[r], unique[left]];

            return left;
        }

        const quickSelect = (l, r) => {
            if(l >= r) return

            const index = partition(l, r);
            
            if(n - k === index) return;
            else if(n - k > index) quickSelect(index + 1, r);
            else quickSelect(l, index - 1);
        }

        quickSelect(0, n - 1);

        return unique.slice(n - k);
    }
}
