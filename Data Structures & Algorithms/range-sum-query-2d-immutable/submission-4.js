class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.sumMatrix = Array.from({ length: matrix.length + 1 }, () => Array(matrix[0].length + 1).fill(0));
        
        for(let row = 1; row < this.sumMatrix.length; ++row) {
            for(let col = 1; col < this.sumMatrix[0].length; ++col) {
                const top = this.sumMatrix[row - 1][col];
                const left = this.sumMatrix[row][col - 1];
                const corner = this.sumMatrix[row - 1][col - 1];

                const sum = matrix[row - 1][col - 1] + top + left - corner;

                this.sumMatrix[row][col] = sum;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const top = this.sumMatrix[row1][col2 + 1];
        const left = this.sumMatrix[row2 + 1][col1];
        const corner = this.sumMatrix[row1][col1];

        const sum = this.sumMatrix[row2 + 1][col2 + 1] - top - left + corner;

        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
