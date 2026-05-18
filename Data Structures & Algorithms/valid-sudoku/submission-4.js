class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const segment = new Map();

        for(let i = 0; i < 9; i++) {
            const rows = new Set();
            for(let j = 0; j < 9; j++) {
                // Check if rows have duplicate
                const cell = board[i][j];

                if(cell === ".") continue;

                const l = Math.floor(i/3);
                const r = Math.floor(j/3);
                const segmentKey = `${l}${r}`
                
                if(rows.has(cell) || 
                (cols.has(j) && cols.get(j).has(cell)) || 
                (segment.has(segmentKey) && segment.get(segmentKey).has(cell))) {
                    return false;
                }

                rows.add(cell);

                if(cols.has(j)) cols.set(j, cols.get(j).add(cell));
                else cols.set(j, new Set(cell));

                if(segment.has(segmentKey)) segment.set(segment, segment.get(segmentKey).add(cell));
                else segment.set(segmentKey, new Set(cell));
            }
        }

        return true;
    }
}
