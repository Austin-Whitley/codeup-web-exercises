"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(stringColor){
    if (stringColor === "red"){
        return stringColor + " is the color of strawberries";
    }
    else if(stringColor === "orange"){
        return stringColor + " is the color of oranges";
    }
    else if(stringColor === "yellow"){
        return stringColor + " is the color of a school bus";
    }
    else if(stringColor === "green"){
        return stringColor + " is the color of grass";
    }
    else if(stringColor === "blue"){
        return stringColor + " is the color of the sky.";
    }
    else if(stringColor === "indigo"){
        return stringColor + " is a neat color";
    }
    else if(stringColor === "violet"){
        return stringColor + " is my favorite color";
    }
    else{
        return "I dont know anything about " + stringColor;
    }
}
console.log(analyzeColor("red"));
console.log(analyzeColor("green"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch(randomColor){
    case "red":
        console.log("Red was chosen");
        break;
    case "orange":
        console.log("orange was chosen");
        break;
    case "yellow":
        console.log("yellow was chosen");
        break;
    case "green":
        console.log("green was chosen");
        break;
    case "blue":
        console.log("blue was chosen");
        break;
    case "indigo":
        console.log("indigo was chosen");
        break;
    case "violet":
        console.log("violet was chosen");
        break;
    default:
        console.log("I'm not sure about that color");
        break;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Please enter a color:").toLowerCase();
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, costBeforeDiscount){
    var finalCost = 0;
    if(luckyNumber === 0){ //No discount
        console.log("Lucky number 0, no discount.");
        finalCost = costBeforeDiscount.toFixed(2);
        return "You drew Luck number: " + luckyNumber + "! Your discount is 0%. Your total comes out to: $" + finalCost;
    }
    else if(luckyNumber === 1){ //10% discount
        console.log("Lucky number 1, 10% discount!");
        finalCost = costBeforeDiscount.toFixed(2) * 0.90;
        return "You drew Luck number: " + luckyNumber + "! Your discount is 10%. Your total comes out to: $" + finalCost;
    }
    else if(luckyNumber === 2){ //25% discount
        console.log("Lucky number 2, 25% discount!");
        finalCost = costBeforeDiscount.toFixed(2) * .75;
        return "You drew Luck number: " + luckyNumber + "! Your discount is 25%. Your total comes out to: $" + finalCost;
    }
    else if(luckyNumber === 3){ //35% discount
        console.log("Lucky number 3, 35% discount!");
        finalCost = costBeforeDiscount.toFixed(2) * 0.65;
        return "You drew Luck number: " + luckyNumber + "! Your discount is 35%. Your total comes out to: $" + finalCost;
    }
    else if(luckyNumber === 4){ //50% discount
        console.log("Lucky number 4, 50% discount!");
        finalCost = costBeforeDiscount.toFixed(2) * 0.50;
        return "You drew Luck number: " + luckyNumber + "! Your discount is 50%. Your total comes out to: $" + finalCost;
    }
    else if(luckyNumber === 5){ //Free! 100% discount
        console.log("Lucky number 5, 100% discount!");
        finalCost = 0;
        return "You drew Luck number: " + luckyNumber + "! Your discount is 100%. Your total comes out to: $" + finalCost;
    }
    else{
        return "I'm not sure what to do with that number...";
    }
}

console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100));// returns 0


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var generateLuckyNumber = Math.floor(Math.random() * 6);

var userBillTotal = parseFloat(prompt("Please enter your bill total $"));
alert(calculateTotal(generateLuckyNumber, userBillTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//##################################################################################
// var userConfirm = confirm("Would you like to enter a number?");
// if(userConfirm){
//     var userNumber = (prompt("Please enter a number: "));
//     console.log(typeof userNumber);
//     //======================================================================
//     if(typeof userNumber === "number") {
//         //even or odd
//         if (userNumber % 2 === 0) {
//             alert("Your number is even.");
//         } else {
//             alert("Your number is odd.");
//         }
//
//         //number + 100
//         alert(userNumber + " + 100 = " + (userNumber + 100));
//
//         //positive / negative block
//         if (userNumber > 0) {
//             alert("Your number is positive");
//         } else if (userNumber < 0) {
//             alert("Your number is negative");
//         } else if (userNumber == 0) {
//             alert("Your number is neither positive or negative.");
//         } else {
//             alert("Please enter a valid number next time.");
//         }
//     }
//     else if(typeof userNumber === "string"){
//         alert("Please enter a valid number next time.");
//     }
//     else{
//         alert("Please enter a valid number next time.");
//     }
// }
// else if(userConfirm === false){
//     alert("Have a nice day.");
// }
// else{
//     console.log("Error: userConfirmNumber");
// }
//##################################################################################

//Same thing but with functions instead
var userConfirm2 = confirm("Would you like to enter a number?");
if(userConfirm2) {
    var userInput = (prompt("Please enter a number: "));
    if(isNaN(userInput) === false){
        evenOdd(userInput);
        plusHundred(userInput);
        positiveNegative(userInput);
    }
    else if(isNaN(userInput) === true){
        alert("Please enter a valid number next time.")
    }
    else{
        console.log("Unexpected Error: functionsUserConfirmUserInput-NaN");
    }
}
//#####################################/\_Functions_/\#####################################\\
function evenOdd(input){
    return(input % 2 === 0) ? "Your number is even." : "Your number is odd.";
}
function plusHundred(input) {
    input = parseFloat(input);
    console.log(typeof input);
    alert(input + " + 100 = " + (input + 100));
}
function positiveNegative(input) {
    if (input > 0) {
        alert("Your number is positive");
    } else if (input < 0) {
        alert("Your number is negative");
    } else if (input == 0) {
        alert("Your number is neither positive or negative.");
    } else {
        alert("Please enter a valid number next time.");
    }
}
