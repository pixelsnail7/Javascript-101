import { Counter } from "./Counter.mjs";
const counter = new Counter();  

function changeMeter() {
    let meterValue = (((counter.counterValue - counter.low) / (counter.high - counter.low)) * 100).toFixed(0);
    // change background color red to green
    meter.style.backgroundColor = `hsl(${meterValue}, 100%, 50%)`; // hue, saturation, lightness 

}

function showCount() {
    display.innerHTML = Number(counter.counterValue).toString().padStart(3, '0');
    countDisplay.innerHTML = Number(counter.countGap).toString().padStart(2, '0');
    changeMeter();
} showCount();

increaseBtn.addEventListener('click', () => {
    counter.increase();
    showCount();
})

decreaseBtn.addEventListener('click', () => {
    counter.decrease();
    showCount();
})

resetBtn.addEventListener('click', () => {
    counter.reset();
    showCount();
})

plusBtn.addEventListener('click', () => {
    counter.gapIncrease();
    showCount();
})

minusBtn.addEventListener('click', () => {
    counter.gapDecrease();
    showCount();
})