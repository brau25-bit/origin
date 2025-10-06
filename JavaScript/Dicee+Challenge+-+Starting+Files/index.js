function random(){
    let randomNumber1 = (Math.random() * 6) + 1;
    return randomNumber1 = Math.floor(randomNumber1);
}

function setImageDice1(){
    let num1 = random();

    if(num1 == 1){document.querySelector(".dice1 img").setAttribute("src", "./images/dice1.png");}
    if(num1 == 2){document.querySelector(".dice1 img").setAttribute("src", "./images/dice2.png");}
    if(num1 == 3){document.querySelector(".dice1 img").setAttribute("src", "./images/dice3.png");}
    if(num1 == 4){document.querySelector(".dice1 img").setAttribute("src", "./images/dice4.png");}
    if(num1 == 5){document.querySelector(".dice1 img").setAttribute("src", "./images/dice5.png");}
    if(num1 == 6){document.querySelector(".dice1 img").setAttribute("src", "./images/dice6.png");}

    return num1;
}

function setImageDice2(){
    let num2 = random();

    if(num2 == 1){document.querySelector(".dice2 img").setAttribute("src", "./images/dice1.png");}
    if(num2 == 2){document.querySelector(".dice2 img").setAttribute("src", "./images/dice2.png");}
    if(num2 == 3){document.querySelector(".dice2 img").setAttribute("src", "./images/dice3.png");}
    if(num2 == 4){document.querySelector(".dice2 img").setAttribute("src", "./images/dice4.png");}
    if(num2 == 5){document.querySelector(".dice2 img").setAttribute("src", "./images/dice5.png");}
    if(num2 == 6){document.querySelector(".dice2 img").setAttribute("src", "./images/dice6.png");}

    return num2;
}

window.onload = function(){
    let var1 = setImageDice1();
    let var2 = setImageDice2();

    if (var1 > var2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } 
    else if (var2 > var1) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } 
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}
