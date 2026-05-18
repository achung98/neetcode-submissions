class Solution {
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            const row = Math.floor(mid / COLS);
            const col = mid % COLS;

            const val = matrix[row][col];

            if (val === target) {
                return true;
            } 
            else if (val > target) {
                r = mid - 1;
            } 
            else {
                l = mid + 1;
            }
        }

        return false;
    }
}