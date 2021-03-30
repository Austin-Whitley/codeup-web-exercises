"use strict";

//we have talked about arrays as if they are static and unchanging. However arrays are fluid and can be changed flipped and edited

/**
 * How can i add an element to an array?
 */

var cheeses = ["brie", "Munster", "kraft american singles", "pepper jack", "string"];

cheeses.push("cheddar");

function logTheCheese(){
    cheeses.forEach(function(cheese){
        console.log(cheese);
    });
}
logTheCheese();

//okay that added things to the end of the array what about the front?

cheeses.unshift("Gouda");

//logTheCheese();

//what id we want to add a bunch of things at one time????

cheeses.push("Colby jack", "White cheddar", "Havarti");
cheeses.unshift("red windsor", "Ragstone", "Nut Rebel");
logTheCheese();

//all we need to do is seperate the items by a comma!!!

//okay we can add but can we remove?
cheeses.shift();
//unlike unshift, shift will remove the first element in the array
cheeses.pop();
//pop will lop off the last element of the array!

var removedCheese = cheeses.shift();

console.log(removedCheese + " has been removed from the cheeses array");
//pop and shift methods will return the item that's been removed.
console.log(cheeses);
/**
 * Golly david, there must be a way from me to locate the index of an element in an array
 */

console.log(cheeses.indexOf("kraft american singles"));
//now we can locate the index of an element even if we arent looking at it.
//we also have the lastIndexOf method

var favNumbers = [17,34,22,17,19,17];

console.log(favNumbers.indexOf(17));
console.log(favNumbers.lastIndexOf(17));
//now we can see where the last occurance of a piece of information is

//we can use this in combination with the slice method
//the slice method will work like the substring method
//it can return a value from one or two arguments

var myFavCheeses = cheeses.slice(cheeses.indexOf("Munster"), cheeses.indexOf("pepper jack")+1);
//this will capture everything between these index's
var otherCheeses = cheeses.slice(7); //will log the 7th element and everything after it.

logTheCheese();
console.log(myFavCheeses);
console.log(otherCheeses);

function copyOfArray(array){
    return array.slice();
}
var reversedCheeses = copyOfArray(cheeses).reverse();


logTheCheese();
console.log("==============split===========")

reversedCheeses.forEach(function(cheese){
    console.log(cheese);
})


//that cheeses array is pretty messy, can we fix that?
cheeses.sort(); //sorts the array alphabetically for strings

console.log(favNumbers.sort().reverse()); //and in ascending order for numbers

//guess what will happen to this one!
console.log([6,9,5, "Walter", "Jesse"].sort()); //best to use this only with the same datatype

//lets get wild
var csvNames = 'David,Javier,Jay,Cody The Duck';
var names = csvNames.split(",");

console.log(csvNames);
console.log(names);

csvNames = names.reverse().join();//if no argument is passed for join method, it defaults to commas
console.log(csvNames);


//Crazy stuff down below!













//joining arrays
var goldTeam = ["John","Greg","Bill"];
var alphaTeam = ["Sandra","Britney","Sarah"];

var staff = alphaTeam.concat(goldTeam);

console.log(goldTeam);
console.log(alphaTeam);
console.log(staff);


function removeAtIndex(array, index){
    var arr1 = array.slice(0, index);
    var arr2 = array.slice(index + 1);
    return arr1.concat(arr2);
}
console.log(cheeses);
console.log(removeAtIndex(cheeses, cheeses.indexOf("kraft american singles")));
//this makes a copy of the original array, and does not manipulate the actual thing
//to do that you would need to do:
//cheeses = removeAtIndex(cheeses, cheeses.indexOf("kraft american singles")));

//another way to remove at index
//console.log(cheeses.splice(cheeses.indexOf("kraft american singles"), 1));
//logTheCheese();

//this messes with the actual array, instead of giving us a copy of the original array.