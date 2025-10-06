const decBtn = document.getElementById("decreaseBtn");
const resBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("increaseBtn");
const textLabel = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function(){
    count++;
    textLabel.textContent = count;
}

decBtn.onclick = function(){
    count--;
    textLabel.textContent = count;
}

resBtn.onclick = function(){
    count = 0;
    textLabel.textContent = count;
}