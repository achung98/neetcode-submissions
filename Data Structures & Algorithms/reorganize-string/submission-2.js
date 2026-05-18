class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const counter = {};
        for(const c of s) {
            counter[c] = 1 + (counter[c] ?? 0);
        }

        const maxHeap = new MaxPriorityQueue(x => x[1]);
        for(const entry of Object.entries(counter)) {
            maxHeap.enqueue(entry);
        }

        console.log(maxHeap.toArray())

        let res = "";
        let prev = null;
        while(!maxHeap.isEmpty() || prev) {
            if(maxHeap.isEmpty() && prev) return '';

            const [c, count] = maxHeap.dequeue();
            res += c;

            if(prev) {
                maxHeap.enqueue(prev);
                prev = null;
            }

            if(count > 1) {
                prev = [c, count - 1];
            }
        }

        return res;
    }
}
