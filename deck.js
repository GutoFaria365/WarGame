    function changeImage(imageArray) {
        var sTopImg = document.getElementById("topSuits");
        var vTopImg = document.getElementById("topValues");
        var sBotImg = document.getElementById("botSuits");
        var vBotImg = document.getElementById("botValues");

        var randomIndex = Math.floor(Math.random() * imageArray.length);
        sTopImg.src = imageArray[randomIndex];
        sBotImg.src = sTopImg.src;
      
    }

    