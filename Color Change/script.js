let colors = ["red", "oreange", "green", "blue", "yellow"]

document.getElementById("btn").addEventListener("click", function () {
    
    let randomIndex = Math.floor(Math.random() * colors.length);
    
    document.body.style.backgroundColor = colors[randomIndex]
})