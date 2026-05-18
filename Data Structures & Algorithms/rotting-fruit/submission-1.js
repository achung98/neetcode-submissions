class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        
        let fresh = 0;
        let minutes = 0;
        let queue = new Queue();

        for(let r = 0; r < ROWS; ++r) {
            for(let c = 0; c < COLS; ++c) {
                if(grid[r][c] === 1) ++fresh;
                else if(grid[r][c] === 2) queue.enqueue([r, c]);
            }
        }

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while(!queue.isEmpty() && fresh > 0) { // Running until we run out of fresh fruit or we run out of rotten fruits to parse
            const len = queue.size();
            for(let i = 0; i < len; ++i) { // I need this inner loop because this will parse all the fruits that are rotting in this minute
                const [r, c] = queue.dequeue();
                for(let [x, y] of directions) {
                    const row = r + x;
                    const col = c + y;

                    if(row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === 1) {
                        grid[row][col] = 2;
                        --fresh;
                        queue.enqueue([row, col]);
                    }
                }
            }
            ++minutes;
        }

        return fresh > 0 ? -1 : minutes;
    }
}