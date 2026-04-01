const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let timeLeft = 25 * 60;
let timerId = null;

function formatTime(seconds) {
const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
const secs = String(seconds % 60).padStart(2, '0');
return `${mins}:${secs}`;
}

function renderTimer() {
timerEl.textContent = formatTime(timeLeft);
}

function startTimer() {
if (timerId) return;
timerId = setInterval(() => {
if (timeLeft > 0) {
timeLeft--;
renderTimer();
} else {
clearInterval(timerId);
timerId = null;
alert('Focus session complete. Take a break.');
}
}, 1000);
}

function pauseTimer() {
clearInterval(timerId);
timerId = null;
}

function resetTimer() {
pauseTimer();
timeLeft = 25 * 60;
renderTimer();
}

function addTask() {
const text = taskInput.value.trim();
if (!text) return;

const li = document.createElement('li');
li.textContent = text;
taskList.appendChild(li);
taskInput.value = '';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') addTask();
});

renderTimer();
