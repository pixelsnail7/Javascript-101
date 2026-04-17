const typeContainer = document.getElementById("typeContainer");
const display = document.getElementById("display");
const jokeBtn = document.getElementById("jokeBtn");

const jokeTypes = ["Any", "Programming", "Dark", "Pun", "Spooky", "Christmas"];
let jokeType = "Any";

// Add type button to typeContainer
jokeTypes.forEach((type) => {typeContainer.innerHTML += `<button class="typeBtn" data-type="${type}">${type}</button>`;});
// Add active class to first button
typeContainer.querySelector(".typeBtn").classList.add("active");

// change joke type on click
typeContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".typeBtn"); // fix selector

    if (btn) {
        // remove active class safely
        const currentActive = typeContainer.querySelector(".active");
        if (currentActive) {
            currentActive.classList.remove("active");
        }

        // add active class to the correct button
        btn.classList.add("active");

        // change joke type
        jokeType = btn.dataset.type;
    }
});

// get joke from API
async function getJoke(type = "Any") {
    const url = `https://v2.jokeapi.dev/joke/${type}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        display.textContent = data.joke || "No Joke Found";
    } catch (error) {
        console.log(error);
    }
} 

function renderJoke() {
    /* render joke after 3 seconds */
    let count = 0;
    jokeBtn.disabled = true;

    const intervalId = setInterval(() => {
        if (count < 3) {
            count++;
            display.textContent = count;
        } else {
            count = 0;
            getJoke(jokeType);
            clearInterval(intervalId);
            jokeBtn.disabled = false;
        }
    }, 1000);
}

jokeBtn.addEventListener("click", renderJoke);