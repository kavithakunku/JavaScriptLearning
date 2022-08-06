// ............counting the people
let count = 0

console.log(count)

console.log(myAge) //will get reference error if you log before initialising the variable

let myAge = 24 // Let is a blck variable

let num1 = 8
let num2 = 2

function increment(){
    console.log("button clicked");
    count = count + 1
    document.getElementById("count-el").innerText = count

}

function save(){

    console.log(count)
    let oldCount = count + "+";
    document.getElementById("save-el").innerText += oldCount
    document.getElementById("count-el").innerText = 0
    count = 0
}

function error(){
    document.getElementById("error").textContent = "OOPS! Something went wrong"
}

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function Add(){
    document.getElementById("sum").textContent = num1 + num2
}
function Division(){
    document.getElementById("sum").textContent = num1/num2
}
