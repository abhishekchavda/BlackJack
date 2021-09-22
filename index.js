let player = {
  name: "Abhishek",
  chips: 151,
}
let cards = []  //array - ordered list of item
let sum = 0
//console.log(sum)
let hasBlackJack = false
let isALive = false
let message = " "


let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//console.log(sumEl)
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
//console.log(cards)

let playerEl = document.getElementById("player-el")
//console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips


// let player = {
//     name: "AB",
//     chips: 145
// }

function getRandomCard(){
  let randomNumber =  Math.floor( Math.random()*13 ) + 1  //0 - 12
  if(randomNumber > 10){
    return 10
  }else if (randomNumber === 1) {
    return 11
  }else{
    return randomNumber
  }
}

function startGame(){
  isALive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
        cardsEl.textContent = "Cards: "
        for(let i=0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
        }
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
          message = "Do you want to draw a new card?";
        } else if (sum === 21) {
          message = "You're got Blackjack!";
          hasBlackJack = true
        } else {
          message = "You're out of the game!";
          isALive = false
        }
        //console.log(message);
        messageEl.textContent = message 
}


//CASH OUT!
//console.log(hasBlackJack)
//console.log(isALive)

 function newCard(){
   if(isALive === true && hasBlackJack === false){
      //console.log("Drawing a new card from the deck!")
      let card = getRandomCard()
      sum += card
      cards.push(card)
      //console.log(cards)
      renderGame()
   }
 }