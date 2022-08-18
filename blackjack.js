let cards = []
let sum = 0
let player = {
    name:"Kavitha",
    chips: 200
}
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum")
let sumEl = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chips
let isAlive = false
let blackJack = false

function getRandomCard(){
    let ranNum =  Math.floor(Math.random() * 13) + 1
    if(ranNum == 1){
        return 11
    }
    else if(ranNum > 10 ){
        return 10
    }
    else{
        return ranNum
    }

}

// function rollDice(){

//     return Math.floor(Math.random() * 6) + 1
// }

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]

    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i =0; i<cards.length; i++){
        cardsEl.textContent +=  cards[i] +" "
    }
    
    sumEl.textContent = "Sum: "+sum

    if(sum < 21){
        messageEl.textContent = "Do you wanna draw a card"
        isAlive = true
        
    }
    else if(sum === 21){
        messageEl.textContent = "You won the game"
        blackJack = true
    }
    else{
        isAlive = false
        messageEl.textContent = "You are out of the game"
    }
}

function newCard(){
    if(isAlive === true && blackJack === false){
    var thirdCard = getRandomCard()
    sum = sum + thirdCard
    cards.push(thirdCard)
    renderGame()
    }
    else{
        messageEl.textContent = "You are not allowed to take another card!"
    }
}
function sample(){
    console.log("test")
}