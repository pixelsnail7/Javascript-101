const counterBox = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrement");
const counterOut = document.getElementById("counterOut");
const display = document.getElementById("display");

class Counter {
    constructor() {
        this.currentValue = 1;
    }
    increase() {
        if (this.currentValue < 99) {
            this.currentValue++;
            counterOut.textContent = this.currentValue < 10 ? `0${this.currentValue}` : this.currentValue;
        }
    }
    decrease() {
        if (this.currentValue > 1) {
            this.currentValue--;
            counterOut.textContent = this.currentValue < 10 ? `0${this.currentValue}` : this.currentValue;
        }
    }
}
const counter = new Counter();


function mathTables() {
    display.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        display.innerHTML += `<div>${Number(counterOut.textContent)} x ${i} = ${counterOut.textContent * i}</div>`;
    }
} mathTables(); // initialize


incrementBtn.addEventListener("click", () => {
    counter.increase();
    mathTables();
});
decrementBtn.addEventListener("click", () => {
    counter.decrease();
    mathTables();
});


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        incrementBtn.click();
    } else if (e.key === "ArrowDown") {
        decrementBtn.click();
    } else if (e.key === "ArrowLeft") {
        decrementBtn.click();
    } else if (e.key === "ArrowRight") {
        incrementBtn.click();
    }
});

counterBox.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        decrementBtn.click();
    } else if (e.deltaY < 0) {
        incrementBtn.click();
    }
});