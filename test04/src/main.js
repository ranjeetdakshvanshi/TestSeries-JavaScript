let timer;
let seconds = 0;
let running = false;

function updateTimer() {
    let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateTimer();
}

function setReverseTimer(setSeconds) {
    seconds = setSeconds;
    updateTimer();
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateTimer();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}
