import {shuffledDeck, createDeck, shuffleDeck, changeImage} from "./deck.js";

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


function startGame() {
    button.style.display = "none"
    button2.style.display = "block"
    shuffleDeck(createDeck());
    dealCards();
    counter1.innerHTML = pDeckCount;
    counter2.innerHTML = cDeckCount;

    console.log(shuffledDeck)
    console.log("Player 1 and Player 2 decks: ")
    console.log(playerDeck, computerDeck);

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

}

startGame()

console.log(shuffledDeck)
console.log("Player 1 and Player 2 decks:")
console.log(playerDeck, computerDeck);