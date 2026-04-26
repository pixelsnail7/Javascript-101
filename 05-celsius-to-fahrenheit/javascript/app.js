const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const modeBtn = document.getElementById("modeBtn");
const now = document.getElementById("now");
let mode = "celsius";
now.innerText = "Fahrenheit";


class Converter {
    constructor(celsius, fahrenheit) {
        this.celsius = celsius;
        this.fahrenheit = fahrenheit;
    }

    toFahrenheit() {
        return Number(this.celsius * 9 / 5 + 32).toFixed(1);
    }

    toCelsius() {
        return Number((this.fahrenheit - 32) * 5 / 9).toFixed(1);
    }
}


modeBtn.addEventListener("click", () => {
    mode = mode === "celsius" ? "fahrenheit" : "celsius";
    now.innerText = mode === "celsius" ? "Fahrenheit" : "Celsius";
});

convertBtn.addEventListener("click", () => {
    if (mode === "celsius") {
        inputFahrenheit.value = new Converter(inputCelsius.value, inputFahrenheit.value).toFahrenheit();
    } else {
        inputCelsius.value = new Converter(inputCelsius.value, inputFahrenheit.value).toCelsius();
    }
});