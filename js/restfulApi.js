"use strict";
//a default fetch does not require a GET
let getOptions = {
    method: 'GET',
    headers: {
        "Content-Type" : "Application/json",
    }
}

function getBooks() {
    fetch("https://bottlenose-acoustic-makeup.glitch.me/books")
        .then(response => response.json()) //when we do a fetch a request the response comes back as a promise, so to interpetate it into readable text we use a .json() on the first request, then
        .then(books => {
            let html = "";

            for (let book of books) {
                html += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $("#container").html(html);
        });
}


fetch("https://bottlenose-acoustic-makeup.glitch.me/books/1")
    .then(response => response.json())
    .then(book => console.log(book))

//POST
let newBook = {
    //grab value from the DOM to insert a new book
    "title": "Percy Jackson & the Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
};

$("#addPercyJackson").click(() => {
    fetch("https://bottlenose-acoustic-makeup.glitch.me/books")
        .then(response => response.json())
        .then(books => {
            for(let book of books){
                if(book.title !== newBook.title
                    && book.author.firstName !== newBook.author.firstName
                    && book.author.lastName !== newBook.author.lastName){
                    fetch("https://bottlenose-acoustic-makeup.glitch.me/books", postOptions)
                        .then(getBooks);
                }else{
                    alert("Hey, that book already exists!");
                    break;
                }
            }
        })
})

let modification = {
    'title': "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(modification)
}
//PUT
fetch("https://bottlenose-acoustic-makeup.glitch.me/books/6", putOptions).then(getBooks);

//PATCH
let insert = {
    "title": "Percy Jackson & The Titans Curse"
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(insert)
}

//PUT
fetch("https://bottlenose-acoustic-makeup.glitch.me/books/7", patchOptions)
    .then(getBooks);

getBooks();

//delete
let deleteOptions = {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
    }
};
//
// $("#uniqueBooks").click(() => {
//     fetch("https://bottlenose-acoustic-makeup.glitch.me/books/")
//         .then(resp => resp.json())
//         .then(books => {
//         let uniqueBooks = books.filter(() => {
//         })
//         for(let book of books){
//             if(uniqueBooks.length === 0){
//                 uniqueBooks.push(book);
//                 continue;
//             }
//             for(let existingBook of uniqueBooks){
//                 if(book.title !== existingBook.title
//                     && book.author.firstName !== existingBook.author.firstName
//                     && book.author.lastName !== existingBook.author.lastName){
//                     //if its not there add the book to the array
//                     uniqueBooks.push(book);
//                 }else{
//                     //if it is there, deleted the book object
//                     fetch(`https://bottlenose-acoustic-makeup.glitch.me/books/${book.id}`, deleteOptions)
//                         .then(getBooks);
//                 }
//             }
//         }
//
//     })
// })