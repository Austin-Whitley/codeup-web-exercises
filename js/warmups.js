"use strict";
//fizzBuzz warmup question:
// if the number is evenly divisible by 3 print fizz, 5 print buzz, 3 & 5 print fizzbuzz and nothing, print the number.

for(var i = 0; i <= 30; i++){
    if(i === 0){
        continue;
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}