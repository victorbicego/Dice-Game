var playerOne = Math.floor(Math.random()*6)+1;
var playerTwo = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/dice" + playerOne + ".png";
var randomDiceImage2 = "images/dice" + playerTwo + ".png";

if (playerOne > playerTwo){
  document.querySelector('h1').innerHTML = "Player One Wins!";
}
else if (playerTwo > playerOne){
  document.querySelector('h1').innerHTML = "Player Two Wins!";
}
else{
  document.querySelector('h1').innerHTML = "Draw!";
}

document.querySelector('.img1').setAttribute("src", randomDiceImage1);
document.querySelector('.img2').setAttribute("src", randomDiceImage2);
