class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        for(const num of nums) {
            const c = (count.has(num) ? count.get(num) : 0) + 1;
            count.set(num, c);
        }

        const buckets = [];

        for(const [key, value] of count.entries()) {
            if(buckets[value]) buckets[value].push(key);
            else buckets[value] = [key];
        }

        const res = []
        for(let i = buckets.length - 1; i >= 0; i--) {
            
            if(buckets[i]) res.push(...buckets[i]);
            if(res.length === k) return res;
        }

        throw new Error("Something wrong happened");
    }
}
