class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    N = 9;
    M = 3;

    isValidSudoku(board) {
        const rows = Array.from({length: this.N}, () => new Set());
        const cols = Array.from({length: this.N}, () => new Set());
        const box = new Map();

        for(let i = 0; i < this.N; ++i) {
            for(let j = 0; j < this.N; ++j) {
                if(board[i][j] === ".") continue;

                const sI = ~~(i/this.M)
                const sJ = ~~(j/this.M)
                const key = `${sI}${sJ}`


                if(
                    cols[j].has(board[i][j]) || 
                    rows[i].has(board[i][j]) || 
                    (box.has(key) && box.get(key).has(board[i][j]))
                ) return false;

                cols[j].add(board[i][j]);
                rows[i].add(board[i][j]);
                box.set(key, box.has(key) ? box.get(key).add(board[i][j]) : new Set(board[i][j]));
                console.log(box)
            }
        }

        return true;
    }
}
