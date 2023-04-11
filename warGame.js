import { shuffledDeck } from "./deck.js";

const p1Deck = [];
const p2Deck = [];

const dealCards = () => {
    p1Deck = shuffledDeck.slice(0, shuffledDeck.length/2)
    p2Deck = shuffledDeck.slice(shuffledDeck.length/2, shuffledDeck.length)
}

dealCards();
console.log(p1Deck, p2Deck);