let container = document.getElementById("container")
container.innerHTML = "<button onclick = 'buy()'>BUY!</button>"

function buy(){
    container.innerHTML += "<p>Thank you for buying</p>"

}

let leads = []
let inputEl = document.getElementById("text-el")
let buttonEl = document.getElementById("button-el")
let listEl = document.getElementById("itemlist")

buttonEl.addEventListener("click",function(){
    leads.push(buttonEl.value)
    buttonEl.value = ""
    renderFunction()

})

function renderFunction(){
    let itemList = ""
    for(let i = 0;i < leads.length;i++){
        itemList += "<li>" + leads[i] + "</li>"
    }
    listEl.innerHTML = itemList

}

let recep = "James"
let sender = "Per Harald Borgen"

const email = `hey ${recep}! How is it going? Cheers ${sender}`
console.log(email)

