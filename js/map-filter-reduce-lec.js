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
// const under10K = cars.filter(car => car.mileage < 10000)

//reduce
//The reducer function takes four arguments: (Accumulator, Current Value, Current Index, Source Array)
let totalCost = prices.reduce(function(total, itemPrice, index){
    console.log(`The index is: ${index}, the total is: ${total}, the item price is: ${itemPrice}`);
    return total + itemPrice;
})
console.log(totalCost.toFixed(2))

let averagePrice = pricesAfterTax.reduce(function(total, itemPrice, index, array){
    total = total + itemPrice;
    //if its our last iteration, we take our total that we just calculated abd we divide it by the total items in the array
    if(index === array.length - 1){
        return total/array.length;
        //every other iteration through the array, we just pass it the total
    }else{
        return total;
    }
})
console.log(averagePrice.toFixed(2))

totalCost = prices.reduce(function (total, price, index){
    console.log(`The index is: ${index}, the total is: ${total}, the item price is: ${price}`)
    return total + price;
}, 150); //custom starting point - start counting at 150 instead of 0
console.log(totalCost);

