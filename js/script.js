// dark mode button event listener
const toggleModeBtn = document.getElementById('toggleModeBtn');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


// clock function
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
    document.getElementById('clock').textContent = formattedTime;
  }
// Update the clock every second
setInterval(updateClock, 1000);
// Initial call to display the clock immediately
updateClock();



//To-Do list function
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const task = document.createElement('li');
      task.textContent = taskInput.value;
      task.addEventListener('click', toggleTask);
      taskList.appendChild(task);
      taskInput.value = '';
    }
  }

function toggleTask() {
    this.classList.toggle('completed');
}
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addTask();
    }
});

// Stop Watch Functionality
let timer; // Variable to store the interval timer
let startTime; // Variable to store the start time of the stopwatch
let running = false; // Flag to indicate if the stopwatch is running

function startStop() {
  if (running) {
    clearInterval(timer); // Stop the timer
    document.getElementById('startStopBtn').textContent = 'Start';
    running = false;
  } 
  else {
    startTime = Date.now(); // Record the start time
    timer = setInterval(updateDisplay, 10); // Start the timer
    document.getElementById('startStopBtn').textContent = 'Stop';
    running = true;
  }
}

function reset() {
  clearInterval(timer); // Stop the timer
  document.getElementById('startStopBtn').textContent = 'Start';
  document.getElementById('sw_display').textContent = '00:00:00'; // Reset display
  running = false;
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime; // Calculate elapsed time in milliseconds
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // Format the time as MM:SS:MS
  const formattedTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;

  document.getElementById('sw_display').textContent = formattedTime; // Update display
}

function padNumber(num) {
  return num.toString().padStart(2, '0'); // Add leading zero if number is < 10
}