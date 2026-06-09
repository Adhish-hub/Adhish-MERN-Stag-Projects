// const pomodoro = document.getElementById("pomodoro");
// const shortBreak = document.getElementById("shortBreak");
// const longBreak = document.getElementById("longBreak");
// const timer = document.getElementById("timer");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// const reset = document.getElementById("reset");

// let timeLeft = 1500;
// let interval;

// let setTime = (seconds) => {
//     clearInterval(interval);
//     interval = null;
//     timeLeft = seconds;
//     updateTimer();

// }

// const updateTimer = () => {
//     const min = Math.floor(timeLeft / 60);
//     const sec = Math.floor(timeLeft % 60);

//     timer.innerHTML = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2,"0")}`;
// }

// const startTimer = () => {
//     if (interval) return;
//     interval = setInterval(() => {
//         timeLeft--;
//         updateTimer();
//         if (timeLeft === o){
//             clearInterval(interval);
//             alert("Time Out");
//             timeLeft = 1500;
//             updateTimer();
//         };
//     }, 1000);
// }

// const stopTimer = () => {
//     clearInterval(interval);
//     interval = null;
// };

// const resetTimer = () => {
//     clearInterval(interval);
//     interval = null;
//     timeLeft = 1500;
//     updateTimer();
// } 

// pomodoro.addEventListener("click", () => setTime(1500));
// shortBreak.addEventListener("click", () => setTime(300));
// longBreak.addEventListener("click", () => setTime(600));

// start.addEventListener("click", startTimer);
// stop.addEventListener("click", stopTimer);
// reset.addEventListener("click", resetTimer);

// updateTimer();


