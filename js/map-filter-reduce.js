"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

//2 - filter
let threeOrMore = users.filter(user => user.languages.length >= 3);
console.log(threeOrMore);

//3 - map
let es6mail = users.map(user => user.email)
console.log(es6mail);

//4 - reduce
let totalYears = users.reduce(function(total, user, index){
    total = total + parseFloat(user.yearsOfExperience);

    //to get average of all
    // if(index === users.length - 1){
    //     return total/users.length;
    // }
    // else{
    //     return total;
    // }

    return total;
}, 0);
console.log(totalYears);


//5 - Javiers solution (deleted mine)
let emailsViaReduce = users.reduce(function(accumulator, user, index, usersArray){
    if( index === usersArray.length - 1){
        accumulator.push(user.email);
        accumulator.sort(function(email1, email2){
            return email2.length - email1.length;
        })
        return accumulator[0];
    }else {
        accumulator.push(user.email);
        return accumulator
    }
}, []);
console.log(emailsViaReduce)

let longestEmailByMatthewWalker = users.reduce((a,b) => a.email.length > b.email.length ? a : b).email;
console.log(longestEmailByMatthewWalker);


let instructors = users.reduce(function(accumulator, user, index, usersArray){
    if(index === usersArray.length - 1){
        accumulator.push(user.name);
        let names = accumulator.join(', ');
        names = "Your instructors are: " + names + "."
        return names;
    }else {
        accumulator.push(user.name);
        return accumulator;
    }
}, [])
console.log(instructors);

// let instructorsReduced = users.reduce((acc, user) => {acc.push(user.name); return acc}, []);
// console.log(instructorsReduced);

