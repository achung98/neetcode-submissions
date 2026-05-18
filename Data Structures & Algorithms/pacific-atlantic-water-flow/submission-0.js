class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const DIR = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pac = new Set();
        const atl = new Set();

        const dfs = (i, j, prevHeight, visit) => {
            if(i < 0 || i >= ROWS || j < 0 || j >= COLS || visit.has(`${i},${j}`) || heights[i][j] < prevHeight) return;

            visit.add(`${i},${j}`);
            for(let d = 0; d < DIR.length; ++d) {
                dfs(i + DIR[d][0], j + DIR[d][1], heights[i][j], visit);
            }


        }

        // do dfs on top and bottom row
        for(let i = 0; i < COLS; ++i) {
            dfs(0, i, heights[0][i], pac);
            dfs(ROWS - 1, i, heights[ROWS - 1][i], atl);
        }

        // do dfs on left and right cols
        for(let i = 0; i < ROWS; ++i) {
            dfs(i, 0, heights[i][0], pac);
            dfs(i, COLS - 1, heights[i][COLS - 1], atl);
        }

        const res = []
        for(let i = 0; i < ROWS; ++i) {
            for(let j = 0; j < COLS; ++j) {
                if(pac.has(`${i},${j}`) && atl.has(`${i},${j}`)) {
                    res.push([i ,j]);
                }
            }
        }

        return res;
    }
}
