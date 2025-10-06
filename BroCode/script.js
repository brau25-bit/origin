/* -----------------------obtener datos---------------------------------------

let fullName = "Braulio Chavez";
let age = 23;
let isStudent = true;

document.getElementById("p1").textContent = "Your name is" + fullName;
document.getElementById("p2").textContent = "You are "+age+" years old";
document.getElementById("p3").textContent = "Enrolled: " + isStudent;*/

/* if ternario para determinar numeros pares
for (let index = 0; index < 100; index++) {
    console.log(index%2 ?  "Par" : "no par");
}*/

/* -------------------- Aceptar input del usuario ----------------------------
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = "Hello "+username;
};*/

/*---------------------if ternarios con funciones------------------------------
let age;
const myH1 = document.getElementById("myH1");

document.getElementById("submit").onclick = function(){
    age = document.getElementById("myText").value;
    age = Number(age);
    age>=18 ? myH1.textContent = "Welcome, you can pass": myH1.textContent = "You can't pass, sorry";
}*/


/*----------------------checked----------------------------------------------- 
checked se utiliza con los input como son radio o checkbox para verificar si han sido seleccionados

const visa = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypalBtn");
const submit = document.getElementById("mySubmit");
const sub = document.getElementById("subResult");
const payment = document.getElementById("paymentResult");

submit.onclick = function(){
    if(myCheckBox.checked){
        sub.textContent = "Estas suscrito!!"
    }else{
        sub.textContent = "NO estas suscrito!!"
    }

    if (visa.checked) {
        payment.textContent = "Se selecciono Visa como el metodo de pago"
    } else if(masterCard.checked){
        payment.textContent = "Se selecciono MasterCard como el metodo de pago"
    } else if(paypal.checked){
        payment.textContent = "Se selecciono PayPal como el metodo de pago"
    }else{
        payment.textContent = "NO se selecciono ningun metodo de pago!!"
    }
}*/

/*----------------------String slicing---------------------------------------
String slicing - sirve para tomar partes de un string. se da el valor donde empieza y se da un valor mas de donde termina, por ejemplo 0, 8 -> la ultima posicion que toma sera la 7


const email = "brauliochaveza@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
let service =  email.slice(email.indexOf("@"));

console.log("Your user name will be "+userName+" and the servirce your using is: "+service);
*/

/* 
encadenamiento de metodos nos permite llamar a distintos metodos evitando hacer codigo o variables que no necesitamos.

let username = "braulioCHAvez";

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
*/



/*-------------------------spread operator----------------------------------
spread operator - nos sirve para separar elementos como arrays o string's en paquetes. tambien nos sirve si queremos juntar dos o mas arrays

let fruits = ["apple", "banana", "watermelon", "pineapple"];
let newFruits = ["carrot", "strawberry", "tomato"];

let foods =[...fruits, ...newFruits];

console.log(foods);
console.log(...fruits[0]);
*/

/* ----------------------spread y rest como paraetros------------------------
spread y rest parametros nos permiten pasar un array como parametro dentro de una funcion

let edadPersona = document.getElementById("textBox").value;
let edades = [];

function edad(edades, ...edad){
    let edadesJuntas = [...edades, edad];
    document.getElementById("subResult").textContent = edadesJuntas;
}
*/

/*----------------------callbacks---------------------------------------------
Callbacks - pasaas una funcion a otra funcion como argumento. se debe de pasar el nombre de la funcion como parametro SIN los parentesis

sum(displayConsole, 3, 2);

function sum(displayConsole, x ,y){
    let result = x + y;
    displayConsole(result);
}

function displayConsole(result){
    document.getElementById("subResult").textContent = result;
}
*/


/*----------------------for each------------------------------------------------
es un metodo usado para iterar los elementos de un array y aplicarlo a una funcion especifica. cuando se pasa el callback como parametro dentro del forEach se pasa tambien por automatico un elemento, indice y el array

let numbers = [1,2,3,4,5];

numbers.forEach(display); //se llama al metodo forEach y se le pasa el callbak

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}
*/

/*----------------------------Map metodo----------------------------------------
Map method acepta un callback y aplica esa funcion a cada elemento pero este crea un nuevo array por lo cual debe de ser almacenado dentro de uno nuevo. preserva el array original

const date = ["2024-1-10", "2025-2-25", "2026-4-13"];
const formattedDate = date.map(fechas);

console.log(formattedDate);

function fechas(element){
    const parts = elements.split("-");
    return '${parts[1]}/${parts[2]}/${parts[0]}'
}
*/

/*--------------------------filter method--------------------------------------
filter method sirve para filtrar los resultados que solo queramos dentro de un array por ejemplo
const ages = [13,18,57,17,25,23,13];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element){
    return element >= 18;
}


const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
const shortWords = words.filter(getShortWords);

function getShortWords(element){
    return element.length <= 6;
}
*/

/*-----------------------------------reduce-------------------------------------
nos permite hacer una operacion donde solo se retorna un valor
et nums = [23,254,54,23];

console.log(nums.reduce((a,b) => a+b, 0));
console.log(nums.reduce((a,b) => Math.max(a,b), 0));
console.log(nums.reduce((a,b) => Math.min(a,b)));
*/

/*----------------------------------arrow function------------------------
let nums = [1,2,3,4,5];

conts even = nums.map(n => n%2 === 0);
*/

/*----------------------------------objetos en js------------------------------
const person = {
    firstname : "Spongebob",
    lastName: "Squarepants",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hi, I'm spongebob!")},
}

person.sayHello();
*/

/*---------------------------------constructores-------------------------------
function Car(make, model, yaer, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = fucntion(){
        console,log("You drive this model : `${this.model}`");
    }
}

const car = Car("Ford", "Mustang", 2024, "red");
const car2 = Car("Chevy", "Camaro", 2025, "blue");
*/

/*---------------------------clases---------------------------------
class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
    
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const tax = 0.05; 

const producto1 = new Product("t-shirt", 19.99);
const total = producto1.calculateTotal(tax);

console.log(producto1);
console.log(total);
*/

/*---------------------------------------- static------------------------------
cualquier cosa que este dentro de una clase y que tenga static solo puede ser accedido mediante la clase, lo demas puede ser accedido por el objeto de la clase
class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`hello my username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`there are ${User.userCount} users in total`);
    }
}

const user1 = new User("Spongebob1");
const user2 = new User("Spongebob2");

user1.sayHello();
User.getUserCount();
*/

/*inheritance = allows a new class to inherit properties and methods 
from an existing class. Helps with code reusability

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
*/


/*
// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
fish.swim();
hawk.fly();
*/

/* flatMap ------ map pero flat lo que hace es convertirlo en un array de una dimension
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
*/

/*
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 },
  {name:"X08",price:120 },
  {name:"X09",price:120 },
  {name:"X10",price:120 },
  {name:"X11",price:120 },
  {name:"X12",price:130 },
  {name:"X13",price:130 },
  {name:"X14",price:130 },
  {name:"X15",price:130 },
  {name:"X16",price:140 },
  {name:"X17",price:140 },
  {name:"X18",price:140 },
  {name:"X19",price:140 }
];

myArr.sort( (p1, p2) => {
  if (p1.price < p2.price) return -1;
  if (p1.price > p2.price) return 1;
  return 0;
});
*/