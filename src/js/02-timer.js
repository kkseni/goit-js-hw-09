import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');

const myInput = document.querySelector("#datetime-picker");
const spanDay = document.querySelector("[data-days]");
const spanHour = document.querySelector("[data-hours]");
const spanMinutes = document.querySelector("[data-minutes]");
const spanSeconds = document.querySelector("[data-seconds]");

console.log(spanDay)


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0] < Date.now())
        if (selectedDates[0] < Date.now()) {
            return Notiflix.Notify.failure('Please choose a date in the future');
        }
        else {
            timer.start(selectedDates[0]);
            startBtn.disabled = true;
        };
        
    }
}
flatpickr(myInput, options);
const timer = {
    start(targetDate) {
    setInterval(() => {
    const delayTime = targetDate - Date.now();
     const { days, hours, minutes, seconds } = convertMs(delayTime)
        console.log(days, hours, minutes, seconds)
        spanDay.textContent = addLeadingZero(days);
        spanHour.textContent = addLeadingZero(hours);
spanMinutes.textContent = addLeadingZero(minutes);
spanSeconds.textContent = addLeadingZero(seconds)
    }, 1000);
    }
};
function addLeadingZero(value) {
    return String(value).padStart(2,'0')
}
    function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours =  Math.floor((ms % day) / hour);
  const minutes =  Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

