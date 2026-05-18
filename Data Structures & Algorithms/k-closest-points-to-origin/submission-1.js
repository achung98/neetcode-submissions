class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue(a => a[0]);

        for(const point of points) {
            const d = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
            heap.enqueue([d, point]);

            if(heap.size() > k) heap.dequeue();
        }

        return heap.toArray().map(a => a[1]);
    }
}
