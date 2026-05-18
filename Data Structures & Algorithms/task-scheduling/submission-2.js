class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const heap = new MaxPriorityQueue(x => x[1]);
        
        const count = {};
        for(const task of tasks) {
            count[task] = (count[task] ?? 0) + 1;
        }

        for(const [task, c] of Object.entries(count)) {
            heap.enqueue([task, c]);
        }

        const queue = new Queue();
        let time = 0;
        while(heap.size() > 0 || queue.size() > 0) {
            ++time;

            if(heap.size() > 0) {
                const [task, c] = heap.dequeue();
                
                if(c - 1 > 0) queue.enqueue([task, time + n, c - 1]);
            }

            if(queue.size() > 0 && queue.front()[1] === time) {
                const task = queue.dequeue();
                heap.enqueue([task[0], task[2]]);
            }
        }

        return time;
    }
}
