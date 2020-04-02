// bring values from DOM
let getSecond = document.getElementById('seconds');
let getMinute = document.getElementById('minutes');
let getHour = document.getElementById('hours');
let getDays = document.getElementById('days');
let hideBtn = document.getElementById('btns');

// define times with details
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set the exactly date & times where to subtract current times.
let getDate = prompt('Enter the Date ex: Aug 20 2020 23:30:20');
let userDate = new Date(getDate).getTime();

let calculateDate = setInterval(intervalImplementation, second);

// the main core-engine of set interval
function intervalImplementation() {
  let currDate = new Date().getTime();
  let distance = userDate - currDate;

  let actualDays = daysFunc(distance, day);
  let remainHours = hourFunc(distance, day, hour);
  let minuteLeft = minFunc(distance, hour, minute);
  let fewSecond = secondFunc(distance, minute, second);

  updateUI(fewSecond, minuteLeft, remainHours, actualDays);

  TimeOver(distance);
}

// It is one kind of controller of time become zero
let TimeOver = (distance, calculateDate) => {
  // when time completed, set all field to 0
  if (distance < 0) {
    clearInterval(calculateDate);
    // when times become 0 it will set and display to the user 0 all fields
    setAllCountDownZero(0);
    // coutEnded function works when times at 0, it generate button
    countEnded();
  }
};

// we are setting all field 0 when time has reached 0
let setAllCountDownZero = value => {
  getSecond.innerHTML = value;
  getMinute.innerHTML = value;
  getHour.innerHTML = value;
  getDays.innerHTML = value;
};

// when time become less than 0 it will automatically generate button
let countEnded = () => {
  let nextURL = '../wish-card/index.html';
  let generatedBtn = `<button class="btn-primary btn-lg">
        <a href="${nextURL}" class="textOnColor">Next</a>
        </button>`;
  hideBtn.innerHTML = generatedBtn;
};

let updateUI = (Seconds, Minutes, Hours, Days) => {
  // show on the display
  getSecond.innerHTML = Seconds;
  getMinute.innerHTML = Minutes;
  getHour.innerHTML = Hours;
  getDays.innerHTML = Days;
};

// here all the calculated func will be set that are later reuseable
function daysFunc(distance, day) {
  return Math.floor(distance / day);
}

// hours
function hourFunc(distance, day, hour) {
  return Math.floor((distance % day) / hour);
}

// minutes
function minFunc(distance, hour, minute) {
  return Math.floor((distance % hour) / minute);
}

// seconds
function secondFunc(distance, minute, second) {
  return Math.floor((distance % minute) / second);
}
