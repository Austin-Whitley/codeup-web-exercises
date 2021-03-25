"use strict";

console.log("=====================Doubling while loop!=====================");
var x = 2;
while(x <= 65536){
    console.log(x)
    x = x * 2;
}

console.log("=====================Ice cream while loop!=====================");
//generate a number 50-100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You start with " + allCones + " ice cream cones.");

//do while loop to iterate down the starting number
do{
    var soldCones = Math.floor(Math.random() * 5) + 1;
    console.log("You have: " + allCones + " ice cream cones.");
    //check to see if there are enough to sell
    if(allCones >= soldCones) {
        console.log("you sold " + soldCones + " cones!");
        allCones = allCones - soldCones;
    }
    else{
        console.log("You tried to sell " + soldCones + ". \r\n There are only " + allCones + " ice cream cones left.")
    }
}while(allCones > 0);