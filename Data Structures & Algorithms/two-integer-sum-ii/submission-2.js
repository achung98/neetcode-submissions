class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        numbers.sort((a, b) => a - b);

        while(l < r) {
            const sum = numbers[l] + numbers[r];
            if(sum === target) return [l + 1, r + 1];
            else if(sum < target) ++l;
            else --r;
        }

        throw new Exception("No op");
    }
}
