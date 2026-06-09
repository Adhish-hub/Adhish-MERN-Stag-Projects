const counter =document.getElementById("counter");
const increemnt = document.getElementById("increment")
const decreemnt = document.getElementById("decrement")
const reset = document.getElementById("reset")

let count = 0;
let max = 10;
let min = 0;

function updateCounter(){
    counter.textContent = count;
}

increemnt.addEventListener("click", function() {
    if(count < max){
        count++;
        updateCounter()
    }
})

decreemnt.addEventListener("click", function (){
    if (count > min){
        count--;
        updateCounter()
    }

})

reset.addEventListener("click", function() {
    count = 0;
    updateCounter()
})