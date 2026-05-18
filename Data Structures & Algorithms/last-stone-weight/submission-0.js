class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = MaxPriorityQueue.fromArray(stones);

        while(heap.size() > 1) {
            const x = heap.dequeue();
            const y = heap.dequeue();

            const smashed = x - y;

            heap.enqueue(smashed);
        }

        return heap.front();
    }
}
