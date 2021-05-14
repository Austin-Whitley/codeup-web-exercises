"use strict";

//array iteration methods
//what's an array iteration? it's when we go through every element in the array and do something to every element

//.forEach() - is an array iteration

// let prices = [32.99, 29.56, 13.89, 4.99, 9.85];
// let html = "";

// prices.forEach(function(item, index){
//     // console.log(item);
//     html = html + "<p>Item[" + index + "] is: $" + item + "</p>";
//     $("#output").html(html);
// });

// prices.forEach(function(item, index){
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//
//     html = html + "<p>Item[" + (index + 1) + "] is: $" + item + " with a Tax of: $" + tax + " making the total: $" + total + "</p>";
//     $("#output").html(html);
// });

// .map()

let output = "";
let prices = [32.99, 29.56, 13.89, 4.99, 9.85];
let pricesAfterTax = [];

pricesAfterTax = prices.map(function(price){
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
})

pricesAfterTax.forEach(function(item){
    output = output + "<p>" + item + "</p>";
    $("#output").html(output);
})

let things = ["book", "pencil", "marker", "eraser"]
let plural = things.map((word, index) => {
    if(index === 0){
        output = "<p>You must bring the following items to class: </p>";
    }
    output += `<p>${word}s</p>`;
    $("#output").html(output);
});

//filter
const under10K = cars.filter(car => car.mileage < 10000)