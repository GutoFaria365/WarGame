import {shuffledDeck, createDeck, shuffleDeck} from "./deck.js";

let playerDeck = [];
let computerDeck = [];

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