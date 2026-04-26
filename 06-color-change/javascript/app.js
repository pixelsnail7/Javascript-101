const colorInput = document.getElementById("colorInput");
const changeBtn = document.getElementById("changeBtn");
const colorCode = document.getElementById("colorCode");

changeBtn.addEventListener("click", () => {
    colorInput.click();

    colorInput.addEventListener("input", () => {
        let colorValue = colorInput.value;

        // change body color
        document.body.style.backgroundColor = colorValue;
        // change button color
        changeBtn.style.color = colorValue;
        // change color code
        colorCode.textContent = colorValue;
    });
});