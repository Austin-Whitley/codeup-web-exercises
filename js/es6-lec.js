"use strict";

var oldWay = Math.pow(4, 2);
console.log(oldWay);

//added Exponentiation Operator **
var newWay = 4**3;
console.log(newWay)

//======== var vs let vs const ==========

//VAR - variable declared with var are function-scoped
//if var is declared anywhere else besides a function, it will always exist in the global scope
//ex:

for(var i = 1; i <= 5; i++){
    console.log(i);
}

i = "hello";
console.log(i);

if(i === "hello"){
    var bubbles = "bubububbubububles";
}

console.log(bubbles);

function test(){
    var logMe = "hello";
    bubbles = "*floating*";
    return logMe;
}
console.log(test())

//CONST - is block scoped. This means that the variable declared as a constant cannot be redeclared or reassigned.

const num = 4;
console.log(num);

//Ex: This wont work because the const variable cannot be defined again
// num = num * 9;
// console.log(num);

//since the const is block scoped we cannot access the variable outside the block of code it was written in
//EX:

if(num === 4){
    console.log("hello")
    const someString = "A random piece of pizza";
    //if the const variable IS DECLARED IN GLOBAL it can be used anywhere.
    console.log(num);
}
// console.log(someString);

//LET - let lets you define variables that are block scoped. As with variables declared with const, the variables
// with let cannot be redefined

let name = "Austin";

//this is not allowed
// let name = "Jay";

//We are allowed to reDEFINE it, just not reDECLARE
name = "jay";

console.log(name);

function foo(n){
    if( n == 6){
        let bum = 2
    }
    console.log(bum);
}
//throws an error because our let variable is within the scope of our if statement and cannot be seen by
// anything outside of it;
// foo(6)

// TEMPLATE STRINGS
//template strings allow for interpolation in strings. Variables and expressions can be read in template strings.
//Template strings use back ticks to recognize the variables and expressions.

let bossMan = "Austin";
console.log(`My name is ${bossMan}`);

console.log(`My name is ` + bossMan);

console.log(`My name is ${bossMan.toUpperCase() + ` Boss-Man`} in all caps`)

let pizzaJoints = ['Some', 'pizza', 'places', 'have', 'bad', 'sauce']

let pizzaTalk = `<ul>
    <li>${pizzaJoints[0]}</li>
    <li>${pizzaJoints[1]}</li>
    <li>${pizzaJoints[2]}</li>
    <li>${pizzaJoints[3]}</li>
    <li>${pizzaJoints[4]}</li>
    <li>${pizzaJoints[5]}</li>
    </ul>`;

document.write(pizzaTalk);

// ======== FOR OF LOOP =========

//regular for loop:
for(let i = 0; i < 3; i++){
    console.log("Imma tell you: " + i + " time(s)")

}

//forEach loop:
pizzaJoints.forEach(function (word, index){
    console.log(word);
    console.log(index);

    console.log(word[index]);
    //if you were to iterate through each character of the word being output, the
    // (word[index]) will output the character at that index of that word.
    // The first word is: "Some", the index when some is being output is 0 (its the first word in the array).
    // Since "S" is the first character of our word it's output when we call for (word[index]).

})

//NEW ES6 structure of loop
//structure
//for(variable of iterable/collection){
//        statement
//}

for(let theWord of pizzaJoints){
    console.log(theWord);
}

let listItemsStored = document.getElementsByTagName('li');
console.log(listItemsStored);

for(let listItem of listItemsStored){
    listItem.innerHTML += " is the truth about some places!"
}

// ==== ARROW FUNCTIONS =====

//regular function
function testing(){
    return "hello from the function";
}
console.log(testing());

//another way to write a function
var testingTwo = function(){
    return "Hello from the second testing function";
}
console.log(testingTwo());

//ES6 way
// () is where the arrgument/ parameter goes
// => is the return of the function.

const testingThree = () => "hello from the testingThree function";
console.log(testingThree());

//passing one parameter
const sayHello = name => {
    return "Hello! " + name;
}
console.log(sayHello("billy"));

//passing two or more parameters
const sayHelloFull = (firstName, lastName) => {
    return "Hello! " + firstName.toUpperCase() + lastName.toUpperCase();
}
console.log(sayHelloFull("billy", "boy"));

//example of the anonymous arrow function expression using a forEach loop.
pizzaJoints.forEach(word => {
    let capitalisedWord = word.toUpperCase();
    console.log(capitalisedWord);
})

//default function parameter values
function add (num1, num2){
    if(num1 === undefined){
        num1 = 2;
    }
    if(num2 === undefined){
        num2 = 3;
    }
    return num1 + num2;
}
console.log(add());
console.log(add(5));
console.log(add(5, 5));

console.log("============Break==========")
//Now in ES6
const adding = (num1 = 4, num2 = 6) => {
    return num1 + num2;
}
console.log(adding());
console.log(adding(5));
console.log(adding(10, 10));

//Object property variable assignment
//ES5 syntax

// var place = "loopy trial";
// var distance = 300;
// var isPaved = false;
//
// var trail = {
//     locationName: place,
//     lengthOfTrail: distance,
//     pavedTrail: isPaved
// };
// console.log(trail);

//ES6

let place = "loopy trial";
let distance = 300;
let isPaved = false;

let trail = {
    place, distance, isPaved
};
console.log(trail);

// OBJECT DESTRUCTURING

//ES5
let nameOfTrail = trail.place;
let distanceOfTrack = trail.distance;

console.log(nameOfTrail);
console.log(distanceOfTrack);

//ES6

let myObject = {
    movieName: 'the Incredibles',
    movieLength: '1hr, 43min'
}

let{movieName, movieLength} = myObject;
console.log(movieName, movieLength);

let describeTrail = trailObj => {
    var {place, distance} = trailObj;
    return place + " is " + distance + " mi long";
}
console.log(describeTrail(trail));

