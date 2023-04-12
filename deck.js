
function changeImage(card1, card2) {
    var sTopImg = document.getElementById("topSuits");
    var vTopImg = document.getElementById("topValues");
    var sBotImg = document.getElementById("botSuits");
    var vBotImg = document.getElementById("botValues");

    sTopImg.src = SUIT_IMAGE[card1.suit];
    vTopImg.src = VALUE_IMAGE[card1.value];
    sBotImg.src = sTopImg.src;
    vBotImg.src = vTopImg.src;

    var sTopImg2 = document.getElementById("topSuits2");
    var vTopImg2 = document.getElementById("topValues2");
    var sBotImg2 = document.getElementById("botSuits2");
    var vBotImg2 = document.getElementById("botValues2");

    sTopImg2.src = SUIT_IMAGE[card2.suit];
    vTopImg2.src = VALUE_IMAGE[card2.value];
    sBotImg2.src = sTopImg2.src;
    vBotImg2.src = vTopImg2.src;
}
const SUIT_IMAGE = {
    "heart": "assets/Heart.png",
    "club": "assets/Club.png",
    "diamond": "assets/Diamond.png",
    "spade": "assets/Spade.png"
};
const CARD_VALUES = {
    "2" : "",
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : ,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}




const suits = ["heart", "club", "diamond", "spade"];
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
let deck = [];
let shuffledDeck = [];

// function card(suit, value) {
//     this.suit = suit;
//     this.value = value;
// };

function createCard(suit, value) {
    return {
        suit: suit,
        value: value
    }

}
 
function createDeck() {
    deck = []
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push(createCard(suit, value));
        }); 
    });
    return deck;
}

function shuffleDeck(deck) {
    shuffledDeck = [... deck]
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
}
       
//  function shuffleDeck(deck) {
//     deck.forEach(card => {
//         const randomCard = Math.floor(Math.random() * deck.length)
//         shuffledDeck.push(deck[randomCard])
//     })
// }

export {shuffledDeck, createDeck, shuffleDeck, changeImage};