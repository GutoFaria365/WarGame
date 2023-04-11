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


const suits = ['heart', 'club', 'diamond', 'spade']
const values = [2,3,4,5,6,7,8,9,10,'j','q','k','a']
const deck = []
const shuffledDeck = [];

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
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push(createCard(suit, value));
        }); 
    });
}

// function shuffleDeck(deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//     return deck;
//   }
       
 function shuffleDeck(deck) {
    deck.forEach(card => {
        const randomCard = Math.floor(Math.random() * deck.length)
        shuffledDeck.push(deck[randomCard])
    })
}

createDeck();
shuffleDeck(deck);

export {shuffledDeck};