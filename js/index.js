// Session 1 

let date = "30.09.2023";
let sesnumber = 2;
console.log(date);
console.log(sesnumber);

console.log(date + ""+sesnumber);

/*let topic = "I am doing a code in practice session";
let age = 33;
console.log(topic);

age=20;
console.log(age); */

function subtract (num1, num2){
    //return num1-num2;
    console.log(num1-num2);

}
subtract(40,7);

function division (num1,num2){
    //return num1/num2;
    console.log(num1/num2);

}

division(100,2);
division(30,2)


function concatenate (str1,str2){
    console.log(str1 + " and " + str2);
}

concatenate("happy","joy");

//let example= 1990;
//console.log(example);


function example (string3){
    console.log(string3);
}



example("new is a statement for my function");


function multiply(numb1,numb2){
    //return (numb1*numb2);
    console.log(numb1*numb2);

}


multiply(6,9);




// Immediately-invoked function expression
(function(){
    // code goes here

}())

//arrow function 
//const multiply = () => {
    //return 2 * 2

//}
// you can copy online the arrow function but be careful of the variable (e.g multiply) above.

// to minise the arrow function
const multiplly = () => 2*2;

console.log(multiplly());


// Session 3 

function checkEvenOrOdd (num) {
    if (num % 2 === 0){
        console.log(+num+ " is an even number");
    } else {
        console.log(+num+ " is an odd number");
    }
}

checkEvenOrOdd(4);
checkEvenOrOdd(763);

/*for( let timer = 10; timer >= 0; timer-- ) {
    if (timer === 0) {
        console.log('Blast off');
    }else {
        console.log(timer);
    }

}*/

// another way to solve the issue 
function countDown() {
    for ( let timer = 10; timer >= 1; timer-- ) {
        console.log(timer);
    }
    console.log("Blast off");
}
 countDown();

 const shoppingCart = [25, 35,60,45,10];
 let sum = 0;

 function calculateSum() {
 for(let i = 0; i<shoppingCart.length; i++) {
    sum = sum + shoppingCart[i];
    console.log(sum);
 }
}
calculateSum();

const firstName = ['Makhosi', 'Coco', 'Love', "Honey", 'Joe'];
let greeting ='Good, morning';

function firstThing() {
for(let j=0; j< firstName.length; j++){
    console.log(greeting +' ' + firstName[j]);
}
}

firstThing();

// for the last element of an array the index with always be [array.length -1], this is how to access the last part of an array.*/




// Code in Practice assignements 

//fizzBuzz assignment

let theRange = 1-100

function fizzBuzz (a = 1-100){
    for(a=0; a <= 100; a+=3) {
        console.log("fizz " + theRange[a]);
    }
} console.log("Fizz");

fizzBuzz();

// *** End of assignement 


//Week 1 assignment 



function calculateAverage(testScore1,testScore2,testScore3){
    //return (testScore1 + testScore2 + testScore3) / 3;
    console.log((testScore1 + testScore2 + testScore3) / 3);

}

calculateAverage(35,45,25);
calculateAverage(10,10,80);

// *** End of assignement 


// Week 2 Assignment.

// Task 1

let age = 33;
const votingAge = 18; 
 
function canVote(){
    if (age >= 18){
        console.log("You are " + age + " years old and can vote.");
    } else
        console.log("You are " + age + " years old and can't vote at this time.");
}

canVote();
age =14;
canVote();

// Task 2 

const favFruits = ['apples', 'kiwi\'s', 'mangoes', 'bananas', 'strawberries'];
const saying = "My favorite fruits are ";

function listOfFruits () {
    for(c=0; c<favFruits.length; c++){
        console.log(saying + ' '+  favFruits[c] +'.');
    }
}
listOfFruits();

// *** End of assignment.

// 14/10/23 Java session 3

// Arrays 

// to add new elements in an array 
const numsArray = [1,2 , 4, 5];

let newElementPosition =2; 

let newElementToInsert = 3;

numsArray.splice(newElementPosition,0, newElementToInsert);

console.log(numsArray);

// to remove elements from an array

let position = 3;
numsArray.splice(position,1);
console.log(numsArray);

// use a button to change the body background of an HTML page 


/*const changeButton = document.querySelector("#btn-change");

function randomColors(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
 changeButton.addEventListener("click", function(){
    document.body.style.background = randomColors();
 });*/

 // for linear gradient do it on the function randomcolors and on return line.

 const messageForm = document.querySelector("form");
 const messageInput = document.querySelector("#message");
 const outputDiv = document.querySelector("#output");

 messageForm.addEventListener("submit", function(e){
    // this prevent the default loading of form when button is clicked
    e.preventDefault();

    //access the value form the input
    const message = messageInput.value;

    const paragraph = document.createElement('p');
    paragraph.textContent = `Message: ${message}`;

    //add paragraph to the div
    outputDiv.append(paragraph);

    // it will clear the input box
    messageInput.value ="";

    return false;

 });




