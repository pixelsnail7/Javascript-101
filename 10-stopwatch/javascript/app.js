const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');


let hr = 0;
let min = 0;
let sec = 0;
let interval;

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    hr = 0;
    min = 0;
    sec = 0;
    hour.textContent = '00';
    minute.textContent = '00';
    second.textContent = '00';
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
});

function timer() {
    if (!interval) {
        interval = setInterval(() => {
            if (hr == 24) {
                resetBtn.click();
            }
            sec++;
            if (sec == 60) {
                min++;
                sec = 0;
            }
            if (min == 60) {
                hr++;
                min = 0;
            }
            hour.textContent = hr < 10 ? '0' + hr : hr;
            minute.textContent = min < 10 ? '0' + min : min;
            second.textContent = sec < 10 ? '0' + sec : sec;
        }, 1000);
    }
}

function pauseAndResume() {
    if (interval) {
        startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        clearInterval(interval);
        interval = null;
    } else {
        startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        timer();
    }
}

startBtn.addEventListener('click', () => {
    pauseAndResume();
});