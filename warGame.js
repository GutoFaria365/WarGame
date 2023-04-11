import {shuffledDeck, createDeck, shuffleDeck} from "./deck.js";

let playerDeck = [];
let computerDeck = [];

const dealCards = () => {
    playerDeck = shuffledDeck.slice(0, shuffledDeck.length / 2)
    computerDeck = shuffledDeck.slice(shuffledDeck.length / 2, shuffledDeck.length)
    return {playerDeck, computerDeck}
}

function startGame() {
    shuffleDeck(createDeck());

}

startGame
dealCards();
console.log("Player 1 and Player 2 decks:")
console.log(playerDeck, computerDeck);