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
    updateDeckCount();

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

const playRound = () => { 
    if(gameOverCheck()) {
        console.log("END GANE")
        messages.innerHTML = "END GANE";
        return;
    }
    messages.innerHTML = "";
    button2.style.display = "none"
    setDeckCards();
    hidePlayedCards();
    setTimeout(slideAniOn, 900);
    setTimeout(rotateCardOn, 1400);
    
    let playerCard = playerDeck.shift();
    let computerCard = computerDeck.shift();
    setTimeout(changeImage, 500, playerCard, computerCard);
    setTimeout(setPlayedCards, 1500);
    setTimeout(hideDeckCards, 1600);
    setTimeout(rotateCardOff, 2100);
    setTimeout(slideAniOff, 2100);
    playedPile.push(playerCard, computerCard);
    setTimeout(updateDeckCount, 900);

    console.log(`Player plays ${playerCard.value} of ${playerCard.suit}`);
    console.log(`Computer plays ${computerCard.value} of ${computerCard.suit}`);

    setTimeout(checkRoundWinner, 2200, playerCard, computerCard);
};

function setPlayedCards() {
    card.style.display = "block";
    card2.style.display = "block";
}
function hidePlayedCards() {
    card.style.display = "none";
    card2.style.display = "none";
}
function setDeckCards() {
    cardReverse.style.display = "block";
    cardReverse2.style.display = "block";
}
function hideDeckCards() {
    cardReverse.style.display = "none";
    cardReverse2.style.display = "none";
}
function slideAniOn() {
    cardContainer.classList.add('animate-card');
    cardContainer2.classList.add('animate-card2');
    flipSound.play();
}
function slideAniOff() {
    cardContainer.classList.remove('animate-card');
    cardContainer2.classList.remove('animate-card2');
    button2.style.display = "block"
}

function rotateCardOn() {
    cardContainer.classList.add('rotate-card');
    cardContainer2.classList.add('rotate-card2');
}

function rotateCardOff() {
    cardContainer.classList.remove('rotate-card');
    cardContainer2.classList.remove('rotate-card2');
}

function updateDeckCount(){
    pDeckCount = playerDeck.length;
    cDeckCount = computerDeck.length;
    counter1.innerHTML = pDeckCount;
    counter2.innerHTML = cDeckCount;
    console.log(`Player deck ${pDeckCount}`)
    console.log(`Computer deck ${cDeckCount}`)
    console.log(`Pile ${playedPile.length}`)
}

function checkRoundWinner(playerCard, computerCard) {
    let card1 = CARD_VALUES[playerCard.value]
    let card2 = CARD_VALUES[computerCard.value]

    if(card1 > card2) {
        playerDeck = playerDeck.concat(playedPile)
        playedPile = [];
        updateDeckCount()
        console.log("Player wins the round");
        messages.innerHTML = "Player wins the round";

    } else if(card1 < card2) {
        computerDeck = computerDeck.concat(playedPile)
        playedPile = [];
        updateDeckCount()
        console.log("Computer wins the round");
        messages.innerHTML = "Computer wins the round";

    } else {
        console.log("It's a tie. Let's go to WAR!");
        messages.innerHTML = "It's a tie. Let's go to WAR!";
        goWar();

    }
}

function goWar(){
        playedPile = playedPile.concat(playerDeck.splice(0, 3), computerDeck.splice(0, 3));
        gameOverCheck();
        updateDeckCount()
        setTimeout(playRound, 1500);
}

function gameOverCheck() {
    if (playerDeck.length <= 0 || computerDeck <= 0) {
        playerDeck = [];
        computerDeck = [];
        playedPile = []
        button.style.display = "block"
        button2.style.display = "none"
        return true;
    }  
    return false;
}



const button = document.getElementById('startGame');
button.addEventListener('click', startGame);
const button2 = document.getElementById('nextRound');
button2.addEventListener('click', playRound);

const card = document.getElementById('card');
const card2 = document.getElementById('card2');

const cardReverse = document.getElementById('cardReverse');
const cardReverse2 = document.getElementById('cardReverse2');

const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');

const cardContainer = document.querySelector('.cardReverse');
const cardContainer2 = document.querySelector('.cardReverse2');

const flipSound = document.getElementById("flip-sound");

const messages = document.getElementById('messages');
