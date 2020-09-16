var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1to6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1 to dice6

var randomImageSource = "images/" + randomDiceImage; //images/dice1 to image/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 2 wins!"
} else {
  document.querySelector("h1").innerHTML = "DRAW"
}
