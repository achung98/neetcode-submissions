class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let level = 0;

        let l = 0;
        let r = COLS - 1;

        while(level < ROWS && l <= r) {
            if(matrix[level][COLS - 1] < target) {
                ++level;
                continue;
            }

            const mid = Math.floor((r + l) / 2);

            if(matrix[level][mid] === target) {
                return true;
            } else if(matrix[level][mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return false;
    }
}
