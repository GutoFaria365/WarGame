const deck = document.querySelector('#deck');
const cards = [
  {
    name: 'Ace of Spades',
    image: ''
  },
  {
    name: 'King of Hearts',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Playing_card_heart_K.svg'
  },
  {
    name: 'Queen of Diamonds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Playing_card_diamond_Q.svg'
  },
  {
    name: 'Jack of Clubs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Playing_card_club_J.svg'
  }
];

deck.addEventListener('click', function() {
  const card = document.createElement('div');
  card.classList.add('card');
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  card.innerHTML = `<img src="${randomCard.image}" alt="${randomCard.name}">`;
  deck.appendChild(card);
  
});



deck.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const { name, image } = cards[randomIndex];

  card.style.transform = "rotateY(180deg)";
  card.innerHTML = `<img src="${image}" alt="${name}">`;

  setTimeout(() => {
    card.style.transform = "rotateY(0deg)";
    card.innerHTML = "";
  }, 3000);
});