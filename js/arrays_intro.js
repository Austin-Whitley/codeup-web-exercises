"use strict";

var testArray = [];

var instructors = ["David", "Jay", "Javier", "Cody the duck"];
//our instructors array variable has 4 elements assigned to it. all four of the elements are strings. However, they do
//not have to be the same data type.

var falsyValues = [false, null, "", 0, undefined, NaN];
//see they dont have to all be the same.

//we can count the length of our arrays!
console.log(instructors.length);
console.log([].length);
console.log([1,1,1,1,1,1,1,1,1,1,1,1,1,1111111,0,0,8,5,3,3,5,5].length);

//we can also access the individual elements of an array!!
console.log(instructors[2]);
console.log([1,2,3][0]);
console.log(testArray[9]); //returns undefined
/**
 access the arrays individual points by searching for it using the brackets
 instructorsArray[2]
 will access the third piece of information stored in that array (starting from 0)
 */

//we can use the elements of arrays in many ways.
var randomIndex = Math.floor(Math.random() * instructors.length);
//alert("One of the instructors is named: " + instructors[randomIndex]);

//what will happen if we console.log an array?
console.log(instructors);

//if we want each element to be output indivudualy we can itterate through the array with a for loop
for(var i = 0; i < instructors.length; i++){
    console.log(instructors[i]);
}
//note that we only want to itterate till tis less than the length not equal to.
for(var k = 0; k <= instructors.length; k++) {
    console.log(instructors[k]);
}
//since we use .length to itterate through the loop we will get undefined since we start counting from 0 with arrays the
//length of the array will always be greater than the number of elements.

function testAllForFalsyValues(array){
    for (var j = 0; j < array.length; j++){
        if(array[j]){ //same as if(Boolean(array[j]) === true)
            alert("Truthy value detected at: " + j);
            return j;
        }
    }
    alert("All values of the array are falsy");
    return -1;
}
testAllForFalsyValues(falsyValues);


//why use -1 to return.
//-1 means that the value is not inside the array at all, since no element can have the index -1
console.log(instructors.indexOf("Geoff"));
console.log(instructors.indexOf("Jay"));

//another way we can iterate through an array is with a forEach loop.

// arrayOfSorts.forEach(function(element, index, array){
//     ...we do things here...
// });
//we pass an unnamed function into the forEach. its worth noting that the names of the parameeters for this "Callback function"
//are ones we can define ourselves, but each what each parameter is meant to represent will not change.
//three passable things in the forEach loop, Element, Index, Array
//element, specifically referencing this element we are accessing at the time of iteration.
//index, at time of iteration
//array, the array that's being passed in and referencing

//example of iteration with for loops rewritten with a forEAch loop.
instructors.forEach(function (instructor,index,array){
    if(index % 2 !== 0){
        console.log("instructor #" + (index + 1) + " of " + array.length + " is named: " + instructor);
    }
})

var numbers = [17,22,34,52,6];

numbers.forEach(function (number,index){
    if(index % 2 === 0){
        console.log(number * 2);
    }
});

//test for falsy values using the forEach loop.
//(PS. You cant break out of a forEach loop, ever. it breaks when it completes the search through the array.)
function testEachForFalsy(array){
    var truthyFound;
    array.forEach(function(element, i){
        if(element){
            alert("Truthy found at index: " + i);
            truthyFound = i;
        }
    });
    if(truthyFound){
        return truthyFound;
    }
    alert("No truthy values found")
    return -1;
}
console.log(testAllForFalsyValues(falsyValues));


instructors.forEach(function(inst){
    console.log(inst);
});