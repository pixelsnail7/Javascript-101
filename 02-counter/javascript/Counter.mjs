export class Counter {
    constructor() {
        this.counterValue = parseInt(localStorage.getItem('counterValue')) || 0;
        this.countGap = parseInt(localStorage.getItem('countGap')) || 1;
        this.high = 100;
        this.low = -100;
    }

    save() {
        localStorage.setItem('counterValue', this.counterValue);
        localStorage.setItem('countGap', this.countGap);
    }

    increase() {
        if (this.counterValue < this.high) {
            this.counterValue = Math.min(this.high, this.counterValue + this.countGap);
            this.save();
        }
    }

    decrease() {
        if (this.counterValue > this.low) {
            this.counterValue = Math.max(this.low, this.counterValue - this.countGap);
            this.save();
        }
    }

    reset() {
        this.counterValue = 0;
        this.save();
    }

    gapIncrease() {
        if (this.countGap < 10) {
            this.countGap++;
            this.save();
        }
    }

    gapDecrease() {
        if (this.countGap > 1) {
            this.countGap--;
            this.save();
        }
    }
}