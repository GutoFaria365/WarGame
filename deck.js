function changeImage(imageArray) {
    var sTopImg = document.getElementById("topSuits");
    var vTopImg = document.getElementById("topValues");
    var sBotImg = document.getElementById("botSuits");
    var vBotImg = document.getElementById("botValues");

    var randomIndex = Math.floor(Math.random() * imageArray.length);
    sTopImg.src = suit;
    vTopImg.src = value;
    sBotImg.src = sTopImg.src;
    vBotImg.src = vTopImg.src;

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

export {shuffledDeck, createDeck, shuffleDeck};