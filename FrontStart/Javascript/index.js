const INITIAL_TIME_IN_SECONDS = 25 * 60;
let TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
let TIMER = null;

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter);

updateDom();

function startCounter() {
    TIMER = setInterval( () => {
        TIMER = TIME_IN_SECONDS--;
        updateDom();
    }, 1000);
}

function pauseCounter() {
    clearInterval (TIMER);
}

function resetCounter() {
    clearInterval (TIMER);
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
}

function updateDom() {
    const minutes = Math.floor(TIME_IN_SECONDS / 60);
    document.getElementById('min').innerHtml = String(minutes).padStart(2,0);        
    
    const seconds = TIME_IN_SECONDS % 60;
    document.getElementById('sec').innerHtml = String(seconds).padStart(2, 0);
}