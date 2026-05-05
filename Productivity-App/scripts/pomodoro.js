const addBtn = document.getElementById("addTimer");
const timersContainer = document.getElementById("timers");
const template = document.getElementById("timerTemplate");

const createTimer = () => {
    let timeLeft = 60000;
    let interval = null;

    const clone = template.content.cloneNode(true);
    const container = clone.querySelector(".container");

    const timer = container.querySelector(".timer");
    const start = container.querySelector(".start");
    const stop = container.querySelector(".stop");
    const reset = container.querySelector(".reset");

    const pomodoro = container.querySelector(".pomodoro");
    const shortBreak = container.querySelector(".shortBreak");
    const longBreak = container.querySelector(".longBreak");

    const updateTimer = () => {
        const min = Math.floor(timeLeft / 60000);
        const sec = Math.floor((timeLeft % 60000) / 1000);
        const milisec = Math.floor((timeLeft % 1000) / 10);

        timer.innerHTML =
            `${min.toString().padStart(2, "0")}:` +
            `${sec.toString().padStart(2, "0")}:` +
            `${milisec.toString().padStart(2, "0")}`;
    };

    const setTime = (seconds) => {
        clearInterval(interval);
        interval = null;
        timeLeft = seconds * 1000;
        updateTimer();
    };

    const setActive = (btn) => {
        [pomodoro, shortBreak, longBreak].forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    };

    pomodoro.addEventListener("click", () => {
        setActive(pomodoro);
        setTime(60);
    });

    shortBreak.addEventListener("click", () => {
        setActive(shortBreak);
        setTime(5);
    });

    longBreak.addEventListener("click", () => {
        setActive(longBreak);
        setTime(10);
    });

    const startTimer = () => {
        if (interval) return;

        interval = setInterval(() => {
            timeLeft -= 10;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(interval);
                interval = null;
                alert("Pomodoro completed");
                setActive(pomodoro);
                setTime(60);
            }
        }, 10);
    };

    const stopTimer = () => {
        clearInterval(interval);
        interval = null;
    };

    const resetTimer = () => {
        clearInterval(interval);
        interval = null;
        timeLeft = 60000;
        updateTimer();
    };

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);

    updateTimer();
    timersContainer.appendChild(clone);
};

addBtn.addEventListener("click", createTimer);

createTimer();
