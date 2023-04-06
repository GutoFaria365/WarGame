function changeText(newText) {
  var div = document.getElementById("body");
  div.innerHTML = newText;
}

function changeImage(imageArray) {
    var img = document.getElementById("Ace");
    var img2 = document.getElementById("image")
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    img.src = imageArray[randomIndex];
    img2.src = img.src;
  }