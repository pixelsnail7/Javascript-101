const outerBox = document.getElementById("outerBox");
const innerBox = document.getElementById("innerBox");
const outerBoxColorBtn = document.getElementById("outerBoxColorBtn");
const innerBoxColorBtn = document.getElementById("innerBoxColorBtn");


class boxColor {
    constructor() {
        this.outerBox = `#F3F4F4`;
        this.innerBox = `#fefefe`;
    }

    defaultColor() {
        outerBoxColorBtn.style.backgroundColor = this.outerBox;
        innerBoxColorBtn.style.backgroundColor = this.innerBox;
        outerBox.style.backgroundColor = this.outerBox;
        innerBox.style.backgroundColor = this.innerBox;
    }

    setOuterColor() {
        let colorPicker = document.createElement("input");
        colorPicker.setAttribute("type", "color");

        colorPicker.addEventListener("change", () => {
            outerBoxColorBtn.style.backgroundColor = colorPicker.value;
            outerBox.style.backgroundColor = colorPicker.value;
            this.outerBox = colorPicker.value;
        });
        colorPicker.click();
    }

    setInnerColor() {
        let colorPicker = document.createElement("input");
        colorPicker.setAttribute("type", "color");

        colorPicker.addEventListener("change", () => {
            innerBoxColorBtn.style.backgroundColor = colorPicker.value;
            innerBox.style.backgroundColor = colorPicker.value;
            this.innerBox = colorPicker.value;
        });
        colorPicker.click();
    }
}

// copy background color code 
function copyBg(id = "outerBox") {
    let color = document.getElementById(id).style.backgroundColor;
    navigator.clipboard.writeText(color);
    alert(`${color} copied`);
}

const boxColor_c = new boxColor();
boxColor_c.defaultColor();

// change outer box color
outerBoxColorBtn.addEventListener("click", () => {
    boxColor_c.setOuterColor();
});

// change inner box color
innerBoxColorBtn.addEventListener("click", () => {
    boxColor_c.setInnerColor();
});


// get color code
outerBox.addEventListener("dblclick", () => {
    copyBg("outerBox");
});
innerBox.addEventListener("dblclick", () => {
    copyBg("innerBox");
});

const innerShadowX = document.getElementById("innerShadowX");
const innerShadowY = document.getElementById("innerShadowY");
const innerShadowBlur = document.getElementById("innerShadowBlur");
const innerShadowSpread = document.getElementById("innerShadowSpread");
const innerShadowColor = document.getElementById("innerShadowColor");
const outerShadowX = document.getElementById("outerShadowX");
const outerShadowY = document.getElementById("outerShadowY");
const outerShadowBlur = document.getElementById("outerShadowBlur");
const outerShadowSpread = document.getElementById("outerShadowSpread");
const outerShadowColor = document.getElementById("outerShadowColor");


class boxShadow {
    constructor() {
        this.outerShadowX = "4px";
        this.outerShadowY = "4px";
        this.outerShadowBlur = "2px";
        this.outerShadowSpread = "0px";
        this.outerShadowColor = `gray`;
        this.innerShadowX = "4px";
        this.innerShadowY = "4px";
        this.innerShadowBlur = "4px";
        this.innerShadowSpread = "0px";
        this.innerShadowColor = `lightgray`;
    }

    defaultShadow() {
        innerBox.style.setProperty(
            "box-shadow",
            `
            ${this.outerShadowX} ${this.outerShadowY} ${this.outerShadowBlur} ${this.outerShadowSpread} ${this.outerShadowColor},
            ${this.innerShadowX} ${this.innerShadowY} ${this.innerShadowBlur} ${this.innerShadowSpread} ${this.innerShadowColor} inset
            `,
            "important"
        );
    }

    setNewInput() {
        this.outerShadowX = `${innerShadowX.value}px`;
        this.outerShadowY = `${innerShadowY.value}px`;
        this.outerShadowBlur = `${innerShadowBlur.value}px`;
        this.outerShadowSpread = `${innerShadowSpread.value}px`;
        this.outerShadowColor = innerShadowColor.value;
        this.innerShadowX = `${outerShadowX.value}px`;
        this.innerShadowY = `${outerShadowY.value}px`;
        this.innerShadowBlur = `${outerShadowBlur.value}px`;
        this.innerShadowSpread = `${outerShadowSpread.value}px`;
        this.innerShadowColor = outerShadowColor.value;
    }
}

const boxShadow_c = new boxShadow();
boxShadow_c.defaultShadow();

const innerInputs = document.querySelectorAll(".innerInputs");
const outerInputs = document.querySelectorAll(".outerInputs");
innerInputs.forEach((input) => {
    input.addEventListener("input", () => {
        boxShadow_c.setNewInput();
        boxShadow_c.defaultShadow();
    });
});
outerInputs.forEach((input) => {
    input.addEventListener("input", () => {
        boxShadow_c.setNewInput();
        boxShadow_c.defaultShadow();
    });
});