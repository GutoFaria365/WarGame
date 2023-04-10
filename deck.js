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

    function card(suit, value) {
        this.suit = suit;
        this.value = value;
    };
     
    function creatDeck() {
        const deck = []
        suits.forEach(suit => {
            values.forEach(value => {
                deck.push(new card(suit, value));
            }); 
        });
    }  


