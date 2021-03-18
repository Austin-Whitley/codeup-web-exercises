"use strict";

var message = "Howdy y'all";
var whatIsThisThen = message + " hope you're having a great day.";

console.log(whatIsThisThen);

var favoriteCheese = prompt("What is your favorite type of cheese?");
console.log(favoriteCheese + " is the cheese of choice!");

var typeOfPrompt = typeof prompt("tell me the thing.");
console.log(typeOfPrompt);

//returns a string value
var num = parseFloat(prompt("gimme a number: "));
console.log("User entered: " + num + ". That number plus 17 is: " + (num + 17) + ".");

//returns a boolean value
var canIGoToTheStore = confirm("Can I go to the store, pleease?");
console.log(canIGoToTheStore);

// returns an undefined variable
alert("You're looking at a website!");