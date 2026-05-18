class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const N = 9;
        const box = 3;

        const rows = {};
        const cols = {};
        const boxes = {};

        for (let row = 0; row < N; ++row) {
            for (let col = 0; col < N; ++col) {
                if(board[row][col] === ".") continue;

                if (
                    (rows[row] && rows[row].has(board[row][col])) ||
                    (cols[col] && cols[col].has(board[row][col])) ||
                    (boxes[`${Math.floor(row / box)},${Math.floor(col / box)}`] &&
                        boxes[`${Math.floor(row / box)},${Math.floor(col / box)}`].has(
                            board[row][col],
                        ))
                )
                    return false;

                rows[row] = rows[row] ? rows[row].add(board[row][col]) : new Set(board[row][col]);
                cols[col] = cols[col] ? cols[col].add(board[row][col]) : new Set(board[row][col]);
                boxes[`${Math.floor(row / box)},${Math.floor(col / box)}`] = boxes[
                    `${Math.floor(row / box)},${Math.floor(col / box)}`
                ]
                    ? boxes[`${Math.floor(row / box)},${Math.floor(col / box)}`].add(
                          board[row][col],
                      )
                    : new Set(board[row][col]);
            }
        }

        return true;
    }
}
