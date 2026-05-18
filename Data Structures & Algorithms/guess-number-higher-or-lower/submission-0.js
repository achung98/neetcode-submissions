class Solution {
    guessNumber(n) {
        let l = 1;
        let r = n;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            const res = guess(mid);

            if (res === 0) {
                return mid;
            } 
            else if (res === -1) {
                r = mid - 1;
            } 
            else {
                l = mid + 1;
            }
        }
    }
}