const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const themeTextBtn = document.getElementById('themeTextBtn');

// global state
let state = {theme: localStorage.getItem("theme") || "dark"};

//  change theme button ui according to *theme state*
function updateButtonUI(state) {
    // icon
    themeBtn.innerHTML = state === "dark" 
        ? `<i class="fa-solid fa-moon"></i>` 
        : `<i class="fa-solid fa-sun"></i>`;
    // color 
    themeBtn.style.color = state === "dark" ? "var(--dark-theme-btn)" : "var(--light-theme-btn)";
}
updateButtonUI(state.theme); // Default

// change theme text button ui according to *theme state*
function updateButtonTextUI(state) {
    // color
    themeTextBtn.style.color = state === "dark" ? "var(--dark-theme-btn)" : "var(--light-theme-btn)";
}
updateButtonTextUI(state.theme); // Default

// change body theme according to *theme state*,
function updateBodyTheme(state) {
    body.classList.remove("dark", "light"); // remove previous theme
    body.classList.add(state); // add new theme
    console.log(`Body theme: ${state}`);
}
updateBodyTheme(state.theme); // Default

function changeTheme() {
    // toggle theme state
    state.theme = state.theme === "dark" ? "light" : "dark";
    // save theme state
    localStorage.setItem("theme", state.theme);
    // update ui
    updateButtonUI(state.theme);
    updateBodyTheme(state.theme);
    updateButtonTextUI(state.theme);
}

// Events
themeBtn.addEventListener('click', changeTheme); // change theme
themeTextBtn.addEventListener('click', changeTheme); // change theme

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t") changeTheme();
});
