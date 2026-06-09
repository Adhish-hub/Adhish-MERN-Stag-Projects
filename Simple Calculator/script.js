var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("answer");

document.getElementById("addition").addEventListener("click", function(){
    res.value = parseFloat(n1.value) + parseFloat(n2.value)
})
document.getElementById("subtraction").addEventListener("click", function(){
    res.value = parseFloat(n1.value) - parseFloat(n2.value)
})
document.getElementById("multiplication").addEventListener("click", function(){
    res.value = parseFloat(n1.value) * parseFloat(n2.value)
})
document.getElementById("division").addEventListener("click", function(){
    if (parseFloat(num2.value) === 0){
        res.value = "error"
    }
    else{
    res.value = parseFloat(n1.value) / parseFloat(n2.value)
}});