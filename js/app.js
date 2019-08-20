// define times with details
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 60;

// bring values from DOM
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let days = document.getElementById('days');
let btns = document.getElementById('btns');

// set the exactly date & times where to subtract current times.
let getDate = prompt("Enter the Date (ex. Aug 20 2020 23:35:59)");
let countDown = new Date(getDate).getTime();

let calculateDate = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDown - now;

    // Calculate times that are remains
    let calculateDays = Math.floor(distance / day);
    let calculateHours = Math.floor((distance % day) / hour);
    let calculateMinutes = Math.floor((distance % hour) / minute);
    let calculateSeconds = Math.floor((distance % minute) / second);

    // show on the display
    seconds.innerHTML = calculateSeconds;
    minutes.innerHTML = calculateMinutes;
    hours.innerHTML = calculateHours;
    days.innerHTML = calculateDays;

    // when time completed, set all field to 0
    if (distance < 0) {
        clearInterval(calculateDate);
        seconds.innerHTML = 0;
        minutes.innerHTML = 0;
        hours.innerHTML = 0;
        days.innerHTML = 0;

        // coutEnded function works when times at 0, it generate button
        function countEnded() {
            let preBtn = `<button class="btn-primary btn-lg">
            <a href="../event/wish-card/index.html" class="textOnColor">Next</a>
            </button>`;
            btns.innerHTML = preBtn;
        }

        countEnded();
    }

}, second);