import {shuffledDeck, createDeck, shuffleDeck} from "./deck.js";

let playerDeck = [];
let pDeckCount = playerDeck.length;
let computerDeck = [];
let cDeckCount = computerDeck.length;
let playedPile = []; 

const CARD_VALUES = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}
const dealCards = () => {
    const midPoint = Math.ceil(shuffledDeck.length / 2)

    playerDeck = shuffledDeck.slice(0, midPoint)
    computerDeck = shuffledDeck.slice(midPoint, shuffledDeck.length)
    return {playerDeck, computerDeck}
}



function startGame() {
    shuffleDeck(createDeck());
    dealCards();

    console.log(shuffledDeck)
    console.log("Player 1 and Player 2 decks: ")
    console.log(playerDeck, computerDeck);

}

const playRound = () =>{
    let playerCard = playerDeck.shift();
    let computerCard = computerDeck.shift();
    playedPile.push(playerCard, computerCard);
    updateDeckCount()


    console.log(`Player plays ${playerCard.value} of ${playerCard.suit}`);
    console.log(`Computer plays ${computerCard.value} of ${computerCard.suit}`);

    checkRoundWinner(playerCard, computerCard);
};

function checkRoundWinner(playerCard, computerCard) {
    let card1 = CARD_VALUES[playerCard.value]
    let card2 = CARD_VALUES[computerCard.value]

    if(card1 > card2) {
        playerDeck = playerDeck.concat(playedPile)
        playedPile = [];
        updateDeckCount()
        console.log("Player wins the roud");

    } else if(card1 < card2) {
        computerDeck = computerDeck.concat(playedPile)
        playedPile = [];
        updateDeckCount()
        console.log("Computer wins the round");

    } else {
        console.log("It's a tie. Let's go to war!");
        goWar();

    }
}

function goWar(){
        // let playerWarDeck =  playerDeck.splice(0, 2);
        // let computerWarDeck = computerDeck.splice(0, 2);
        playedPile = playedPile.concat(playerDeck.splice(0, 3), computerDeck.splice(0, 3));
        gameOverCheck();
        updateDeckCount()
        playRound();
  
}

function cleanRound(){ 

    updateDeckCount()

}

function gameOverCheck() {
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

function updateDeckCount(){
    pDeckCount = playerDeck.length;
    cDeckCount = computerDeck.length;
    console.log(`Player deck ${pDeckCount}`)
    console.log(`Computer deck ${cDeckCount}`)
    console.log(`Pile ${playedPile.length}`)
}

const button = document.getElementById('startGame');
button.addEventListener('click', startGame);

const button2 = document.getElementById('nextRound');
button2.addEventListener('click', playRound);

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

