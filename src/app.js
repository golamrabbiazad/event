// bring values from DOM
let secondsFromDocument = document.getElementById('seconds');
let minutesFromDocument = document.getElementById('minutes');
let hoursFromDocument = document.getElementById('hours');
let daysFromDocument = document.getElementById('days');
let btnsFromDocument = document.getElementById('btns');

// define times with details
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set the exactly date & times where to subtract current times.
let getDate = prompt('Enter the Date ex: Aug 20 2020 23:30:20');
let userDate = new Date(getDate).getTime();

let calculateDate = setInterval(() => {
  let currDate = new Date().getTime();
  let distance = userDate - currDate;

  let calculateDays = Math.floor(distance / day);
  let calculateHours = Math.floor((distance % day) / hour);
  let calculateMinutes = Math.floor((distance % hour) / minute);
  let calculateSeconds = Math.floor((distance % minute) / second);

  displayTheCalculation(
    calculateSeconds,
    calculateMinutes,
    calculateHours,
    calculateDays
  );

  TimeOver(distance);
}, second);

let countEnded = () => {
  let preBtn = `<button class="btn-primary btn-lg">
        <a href="../event/wish-card/index.html" class="textOnColor">Next</a>
        </button>`;
  btnsFromDocument.innerHTML = preBtn;
};

let setAllCountDownZero = value => {
  secondsFromDocument.innerHTML = value;
  minutesFromDocument.innerHTML = value;
  hoursFromDocument.innerHTML = value;
  daysFromDocument.innerHTML = value;
};

let TimeOver = distance => {
  // when time completed, set all field to 0
  if (distance < 0) {
    clearInterval(calculateDate);
    // when times become 0 it will set and display to the user 0 all fields
    setAllCountDownZero(0);
    // coutEnded function works when times at 0, it generate button
    countEnded();
  }
};

let displayTheCalculation = (Seconds, Minutes, Hours, Days) => {
  // show on the display
  secondsFromDocument.innerHTML = Seconds;
  minutesFromDocument.innerHTML = Minutes;
  hoursFromDocument.innerHTML = Hours;
  daysFromDocument.innerHTML = Days;
};
