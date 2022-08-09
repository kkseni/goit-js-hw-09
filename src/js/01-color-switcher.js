
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', onChangeColor);
stopButton.addEventListener('click', noneTimer)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function onChangeColor() {
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
  startButton.disabled = true;
    
}

function noneTimer() {
  clearInterval(timerId);
  startButton.disabled = false;
  
}