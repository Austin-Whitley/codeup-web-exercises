"use strict";
console.log("=====================Break and Continue loop!=====================")
for(var i = 1; 1 <= 100;i++) {
    var userInput = parseInt(prompt("Please enter an odd number between 1 - 50."))
    if(userInput % 2 !== 0){
        if(userInput > 0 && userInput < 50){
            alert("That sure is an odd number between 1-50! \r\n\ Please check the console log for all further output.")
            break;
        }else{
            alert("Please enter a valid number.");
        }

    }else{
        alert("Please enter a valid number.");
    }
}
//print all odd numbers except the users number, skip that one
for(var i = 1; i < 50; i++){

    if(i === userInput){
        console.log("Yikes! " + userInput + " Skipping that number...");
        continue;
    }
    if(i % 2 !== 0){
        console.log("Number: " + i);
    }
}