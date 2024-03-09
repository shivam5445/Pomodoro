document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let minutes = 25;
    let seconds = 0;

    const timeDisplay = document.getElementById('time');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const timeInput = document.getElementById('timeInput');
    const changeTimeButton = document.getElementById('changeTimeButton');
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    function updateDisplay() {
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timer = setInterval(function() {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else {
                clearInterval(timer);
                alert('Pomodoro session completed!');
            }
            updateDisplay();
        }, 1000);
    }

    startButton.addEventListener('click', function() {
        startTimer();
        startButton.disabled = true;
    });

    // pauseButton.addEventListener('click',function(){

    // })

    resetButton.addEventListener('click', function() {
        clearInterval(timer);
        minutes = parseInt(timeInput.value);
        seconds = 0;
        updateDisplay();
        startButton.disabled = false;
    });

    changeTimeButton.addEventListener('click', function() {
        minutes = parseInt(timeInput.value);
        seconds = 0;
        updateDisplay();
    });

    addButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });
});
