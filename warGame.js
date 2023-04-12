import {shuffledDeck, createDeck, shuffleDeck} from "./deck.js";

let playerDeck = [];
let computerDeck = [];
let playerPile = [];
let computerPile = []; 

const dealCards = () => {
    const midPoint = Math.ceil(shuffledDeck.length / 2)

    playerDeck = shuffledDeck.slice(0, midPoint)
    computerDeck = shuffledDeck.slice(midPoint, shuffledDeck.length)
    return {playerDeck, computerDeck}
}

function startGame() {
    shuffleDeck(createDeck());
    dealCards();

}

startGame()

console.log(shuffledDeck)
console.log("Player 1 and Player 2 decks: ")
console.log(playerDeck, computerDeck);

const playRound = () =>{
    
    console.log(`Player plays ${playerCard.rank} of ${playerCard.suit}`);
    console.log(`Computer plays ${computerCard.rank} of ${computerCard.suit}`);

    if(playerCard.value > computerCard.value){
        console.log("Player wins the roud");
        playerPile.push(playerCard, computerCard);
        playerPile = [];
        computerPile = [];   
    }
    else if(playerCard.value < computerCard.value){
        console.log("Computer wins the round");
        computerPile.push(playerCard, computerCard);
        playerPile = [];
        computerPile = [];
    }
    else(playerCard.value = computerCard.value){
        console.log("It's a tie. Let's go to war!");
        playerPile.push(playerCard);
        computerPile.push(computerCard);
    if (playerDeck.length < 4) {
      playerDeck = [...playerPile];
      playerPile = [];
      shuffleDeck(playerDeck);
    }
    if (computerDeck.length < 4) {
      computerDeck = [...computerPile];
      computerPile = [];
      shuffleDeck(computerDeck);
    }
  }
};
function goWar(){
    while(!warWinner){
     let playerWarDeck =  playerDeck.splice(0, 3);
     let computerWarDeck = computerDeck.splice(0, 3);
     const playerCard = playerDeck.shift();
     const computerDeck = computerDeck.shift();
     let warDeck = warDeck.push(playerWarDeck, computerDeck, playerCard, computerCard);
     
     if(playerCard)
     playerDeck.push(pl)
     computerDeck = [];
    }


}
function cleanRound(){ 
    playerDeck = playerDeck.concat(playerPile);
    computerDeck = computerDeck.concat(computerPile);

    playerPile = [];
    computerPile = [];

    updateDeckCount()
}

function updateDeckCount(){

}

/*const playGame = () => {
  shuffleDeck(createDeck());
  dealCards();
  
  while (playerDeck.length > 0 && computerDeck.length > 0) {
    playRound();
  }
  
  if (playerDeck.length === 0) {
    console.log("Computer wins the game!");
  } else if (computerDeck.length === 0) {
    console.log("Player wins the game!");
  }
};*/

