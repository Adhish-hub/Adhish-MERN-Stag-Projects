let timer = document.getElementById("timer")
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let count = 0;
let interval = null;

startBtn.addEventListener("click", function () {
    if(interval === null){
        interval = setInterval(function () {
            count ++;
            timer.innerText = count
        }, 1000)
    }
});

stopBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    count = 0;
    timer.innerText = count;
})