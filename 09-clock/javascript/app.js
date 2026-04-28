const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function changeTheme(time) {
    if (time < 6 || time > 18) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

function clock() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am = hr >= 12 ? "PM" : "AM";

    hr = hr >= 12 ? hr - 12 : hr; // convert to 12-hour format
    hr = hr == 0 ? 12 : hr; // convert 0 to 12
    min = min < 10 ? "0" + min : min; // add 0 if less than 10
    sec = sec < 10 ? "0" + sec : sec; // add 0 if less than 10
    
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
    ampm.textContent = am;

    let day_ = date.getDate();
    day.textContent = day_ < 10 ? "0" + day_ : day_;
    let month_ = date.getMonth() + 1; // add 1 because months are 0-indexed
    month.textContent = month_ < 10 ? "0" + month_ : month_; 
    year.textContent = date.getFullYear();

    // change theme
    changeTheme(date.getHours());
}

clock(); // run clock
setInterval(clock, 1000); // update clock every second