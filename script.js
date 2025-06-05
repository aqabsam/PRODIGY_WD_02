let startTime = 0;
let elapsedTime = 0;
let interval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');

function formatTime(ms) {
  let date = new Date(ms);
  let hrs = String(Math.floor(ms / 3600000)).padStart(2, '0');
  let mins = String(date.getUTCMinutes()).padStart(2, '0');
  let secs = String(date.getUTCSeconds()).padStart(2, '0');
  let millis = String(ms % 1000).padStart(3, '0');
  return `${hrs}:${mins}:${secs}.${millis}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
    startStopBtn.textContent = "Stop";
  } else {
    clearInterval(interval);
    running = false;
    startStopBtn.textContent = "Start";
  }
}

function reset() {
  clearInterval(interval);
  running = false;
  elapsedTime = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
}

updateDisplay(); // Initialize display