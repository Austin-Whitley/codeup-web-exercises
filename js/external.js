"use strict";

var message = "Hello from external JavaScript";
console.log(message);

alert("Welcome to my website!");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

/**
 * Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry
 * about the real operations to get the values, the goal of these exercises is to understand how real world
 * conditions can be represented with code.
 *
 * You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love
 * it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
 * how much will you have to pay?
 *
 * Suppose you're working as a contractor for 3 companies: Google, Amazon and
 * Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
 * How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4
 * hours for Amazon.
 *
 * A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
 * her current schedule.
 *
 * A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
 * members do not need to buy a specific amount of products.
 */

//problem one
var littleMermaidDays = parseFloat(prompt("How many days did you rent the Little Mermaid movie?"));
var brotherBearDays = parseFloat(prompt("How many days did you rent the BrotherBear movie?"));
var herculesDays = parseFloat(prompt("How many days did you rent the Hercules movie?"));
var pricePerDay = parseFloat(prompt("How much does it cost per day to rent a movie?"));

var totalCost = ((littleMermaidDays + brotherBearDays + herculesDays) * pricePerDay);

alert("The total cost to rent all three movies is: $" + totalCost);

//problem two
var googleWage = parseFloat(prompt("What is your hourly wage at Google?"));
var amazonWage = parseFloat(prompt("What is your hourly wage at Amazon?"));
var facebookWage = parseFloat(prompt("What is your hourly wage at Facebook?"));

var googleHoursWorked = parseFloat(prompt("How many hours did you work for Goodle?"));
var amazonHoursWorked = parseFloat(prompt("How many hours did you work for Amazon?"));
var facebookHoursWorked = parseFloat(prompt("How many hours did you work for Facebook?"));

var totalPayCheck = ((googleWage * googleHoursWorked) + (amazonWage * amazonHoursWorked) + (facebookWage * facebookHoursWorked));

alert("Your total paycheck is: " + totalPayCheck);

//problem three
var fullClass = confirm("Is the class full?");
var timeConflict = confirm("Does a 9:00am - 10:30am conflict with your schedule?");

var classRegistration = !(fullClass || timeConflict);
if (classRegistration == true) {
    alert("You CAN register for this class!");
}
else if(classRegistration == false){
    alert("You can NOT register for this class.");
}

//problem four
var numberOfItems = parseFloat(prompt("How many items do you have in your cart?"));
var premiumMember = confirm("Are you a premium member?");
var offerExpired = confirm("Has the discount offer expired?");

if(numberOfItems >= 2 || premiumMember == true){

    if(offerExpired == false){
        alert("Congratulations! You are approved for our discount.");
    }
    else if(offerExpired == true){
        alert("We are sorry, this offer is no longer available.");
    }
    else{
        console.log("Uncaught exception: problem Four")
    }
}
else{
    alert("We're sory, this offer does not apply to you.");
}