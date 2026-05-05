console.log("script.js loaded");


const buttons = document.querySelectorAll(".nav-item");
const frame = document.getElementById("contentFrame");


const navMap = {
    pomodoroBtn: "pomodoro.html",
    todoBtn: "todo.html",
    notesBtn: "notes.html",
    colorsBtn: "colors.html",
    apiBtn: "api.html",
};


let currentPage = "pomodoro.html";


buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const page = navMap[btn.id];

        if (!page) return;

      
        if (page === currentPage) {
            console.log("Already on this page");
            return;
        }

      
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

       
        frame.src = page;
        currentPage = page;

        console.log("Loaded page:", page);
    });
});