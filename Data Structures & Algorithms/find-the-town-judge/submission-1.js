class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const adjList = {};

        for(const t of trust) {
            const [first, second] = t;

            if(first in adjList) adjList[first].add(second);
            else adjList[first] = new Set([second]);
        }
        
        let potentialJudge = -1;
        for(let i = 1; i <= n; ++i) {
            if(!(i in adjList)) {
                potentialJudge = i;
                break;
            }
        }

        if(potentialJudge === -1) return -1;

        for(const key in adjList) {
            if(!adjList[key].has(potentialJudge)) return -1;
        }

        return potentialJudge;
    }
}
