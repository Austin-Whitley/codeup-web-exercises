"use strict";
//How to make use and define a function in JS
//immediatley invoked function expression (IEFE's)
(function () {

//parenthesis hold the parameters of your function, the value you are expecting to be passed into the function.
function doTheThing(input) {
    var output = input + " was pulled into the function.";
    return output;
}
console.log(doTheThing("Hot dog"));



function addStuff(x, y){
    return x+y;
}
console.log(addStuff(17, 18));



//lets make a "bad" function (dont return console logs)
function logToConsole(info){
    return console.log(info + " is something important to keep in mind");
}
var needThisForLater = logToConsole("Kitty cats are very cute.");
//result should be undefined because we are returning a console log
console.log(needThisForLater);



//Testing to see if the function works and what data is passed through the function to console.log
function addingToString(str){
    var finalString = str + " is a string.";
    //console.log(typeof finalString);
    finalString += " and if it wasnt a string before, it is now.";
    //console.log(finalString);
    return finalString;
}
alert(addingToString("lynx"));


//global vs local variables
var global = "Earth";
console.log(global);

function getGlobalAndLogIt(){
    var local = "Neptune";
    console.log(global);
    console.log(local);
}
getGlobalAndLogIt();


//another way to define functions
var coolGuyFunction = function (string){
    return string + ", but with sunglasses. (-o-o-)";
}
console.log(coolGuyFunction("Cats"));

})();