"use strict";
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const winner = document.querySelector("h1");
 
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
let dice1 = `images/dice${rollDice()}.png`;
let dice2 = `images/dice${rollDice()}.png`;
 
function win() {
  if (dice1 !== dice2) {
    return dice1 > dice2 ? "Player 1 Wins" : "Player 2 Wins";
  }
  return "Draw";
}
 
img1.setAttribute("src", dice1);
img2.setAttribute("src", dice2);
winner.textContent = win();