"use strict";
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("=====================Multiplication table for loop!=====================");
//for loop function for multiplication tables
function showMultiplicationTable(input){
    for (var i= 1; i <= 10; i++){
        var total = input * i;
        console.log(input + " * " + i + " = " + total);
    }
}
showMultiplicationTable(7);

console.log("=====================For loop triangle!=====================");
//nested for loop pyramid
var totalRows = 9;
var output = ""
for(var i = 1; i <= totalRows ; i++){
    for (var k = 1; k <= i ; k++){
        if(i === k) {
            output += k + "";
        }else{
            output += i + "";
        }
    }
    console.log(output);
    output = "";
}

console.log("=====================Even/Odd for loop!=====================");
//for loop even/odd using randomNumber function
for (var i = 10; i >= 0; i--){

    var randomNumber = getRandomInt(20, 200)
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    }else{
        console.log(randomNumber + " is odd");
    }
}

console.log("=====================decrease by 5 for loop!=====================");
//loop to decrease the initial value by 5 every iteration
for(var i = 100; i > 0; i = i - 5 ){
    console.log(i);
}
