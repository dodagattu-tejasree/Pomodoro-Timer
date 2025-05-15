// script.js
let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const workModeButton = document.getElementById("work-mode");
const breakModeButton = document.getElementById("break-mode");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60; // Reset to 25 minutes
  updateDisplay();
}

function switchToWorkMode() {
  timeLeft = 25 * 60; // 25 minutes
  updateDisplay();
}

function switchToBreakMode() {
  timeLeft = 5 * 60; // 5 minutes
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
workModeButton.addEventListener("click", switchToWorkMode);
breakModeButton.addEventListener("click", switchToBreakMode);

// Initialize display
updateDisplay();