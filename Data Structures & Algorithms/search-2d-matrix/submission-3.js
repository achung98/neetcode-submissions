class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix[0].length;

        let row = 0;
        while(row < matrix.length && l < r) {
            // I'm on the other row
            if(matrix[row][matrix[row].length - 1] < target) ++row;
            else {
                const mid = Math.floor(l + (r - l) / 2);

                if(matrix[row][mid] > target) r = mid;
                else l = mid + 1;
            }
        }

        return l ? matrix[row][l - 1] === target : false;
    }
}
