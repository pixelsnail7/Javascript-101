const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

class Timer {
    constructor() {
        this.hr = 0;
        this.min = 5;
        this.sec = 0;
        this.time = this.hr * 3600 + this.min * 60 + this.sec;
        this.interval = null;
    }

    set hour(time) { this.hr }

    init() {
        hour.textContent = this.hr < 10 ? '0' + this.hr : this.hr;
        minute.textContent = this.min < 10 ? '0' + this.min : this.min;
        second.textContent = this.sec < 10 ? '0' + this.sec : this.sec;
    }

    reset() {
        clearInterval();
        this.interval = null;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        hour.textContent = '00';
        minute.textContent = '00';
        second.textContent = '00';
        startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }

    start() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        } 
        else if (this.time > 0) {
            this.interval = setInterval(() => {
                this.time -= 1;
                this.hr = Math.floor(this.time / 3600);
                this.min = Math.floor((this.time - this.hr * 3600) / 60);
                this.sec = this.time - this.hr * 3600 - this.min * 60;
                this.init();
                if (this.time == 0) {
                    clearInterval(this.interval);
                    this.interval = null;
                    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
                    alert('Time Over!');
                }
            }, 1000);
            startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        }
    }

}

const timer = new Timer();
timer.init();

startBtn.addEventListener('click', () => timer.start());
resetBtn.addEventListener('click', () => timer.reset());


