const SUIT_IMAGE = {
    "heart": "assets/Heart.png",
    "club": "assets/Club.png",
    "diamond": "assets/Diamond.png",
    "spade": "assets/Spade.png"
};


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
function changeImage(card1, card2) {
    var sTopImg = document.getElementById("topSuits");
    var vTopImg = document.getElementById("topValues");
    var sBotImg = document.getElementById("botSuits");
    var vBotImg = document.getElementById("botValues");
    var sTopImg2 = document.getElementById("topSuits2");
    var vTopImg2 = document.getElementById("topValues2");
    var sBotImg2 = document.getElementById("botSuits2");
    var vBotImg2 = document.getElementById("botValues2");

    sTopImg.src = SUIT_IMAGE[card1.suit];
    if(card1.suit === "heart" || card1.suit === "diamond"){
        vTopImg.style.color = "red"
        vBotImg.style.color = "red"
    } else {
        vTopImg.style.color = "black"
        vBotImg.style.color = "black"
    }
    vTopImg.innerHTML = card1.value;
    sBotImg.src = sTopImg.src;
    vBotImg.innerHTML = vTopImg.innerHTML;

    sTopImg2.src = SUIT_IMAGE[card2.suit];
    if(card2.suit === "heart" || card2.suit === "diamond"){
        vTopImg2.style.color = "red"
        vBotImg2.style.color = "red"
    } else {
        vTopImg2.style.color = "black"
        vBotImg2.style.color = "black"
    }
    vTopImg2.innerHTML = card2.value;
    sBotImg2.src = sTopImg2.src;
    vBotImg2.innerHTML = vTopImg2.innerHTML;
}

export {shuffledDeck, createDeck, shuffleDeck, changeImage};
// module.export = {shuffledDeck, createDeck, shuffleDeck, changeImage};