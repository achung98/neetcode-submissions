class FreqStack {
    constructor() {
        this.count = {};
        this.group = {};
        this.maxFreq = 0;
    }

    push(val) {
        const freq = 1 + (this.count[val] ?? 0);

        this.count[val] = freq;

        if (!this.group[freq]) {
            this.group[freq] = [];
        }

        this.group[freq].push(val);

        this.maxFreq = Math.max(this.maxFreq, freq);
    }

    pop() {
        const val = this.group[this.maxFreq].pop();

        --this.count[val];

        if (this.group[this.maxFreq].length === 0) {
            --this.maxFreq;
        }

        return val;
    }
}