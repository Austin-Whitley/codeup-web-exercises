(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Austin",
        lastName: "Whitley",
    }
    console.log(person.lastName + ", " + person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        console.log("Hello," + person.firstName + " " + person.lastName);
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        //test if the amount is greater than 200, if so reduce amount by 12% and return
        if(shopper.amount >= 200){
            var withDiscount = shopper.amount * .88;
            console.log(shopper.name + " owes: $" + shopper.amount + " with the 12% promotional discount: $" + withDiscount);
        }else{
            console.log(shopper.name + " owes: $" + shopper.amount );
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {title: "Lord of the Rings", author: {firstName: "J.R.R.", lastName: "Tolkien"}},
        {title: "The Hobbit, there and back again", author: {firstName: "J.R.R.", lastName: "Tolkien"}},
        {title: "The little Prince", author: {firstName: "Antoine", lastName: "Saint-Exupéry"}},
        {title: "A Tale of Two Cities", author: {firstName: "Charles", lastName: "Dickens"}},
        {title: "Da Vinci Code", author: {firstName: "Dan", lastName: "Brown"}}
    ]

    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (var i = 0; i < books.length; i++){
        console.log("Book #" + (i + 1));
        console.log("title: " + books[i].title);
        console.log("Author: " + books[i].author.lastName + ", " + books[i].author.firstName);
        console.log("---");
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName){
        //add another object to the books array
        books.push({title: title, author: {firstName: authorFirstName, lastName: authorLastName}});
    }
    var userInput = confirm("Would you like to add a book to the library?");
        if (userInput){
            var userTitle = prompt("What is the title of the book?");
            var authorFirst = prompt("What is the author's first name?");
            var authorLast = prompt("What is the author's last name?");

            createBook(userTitle, authorFirst, authorLast);

            // console.log(books[5].title);
            // console.log(books[5].author.firstName);
            // console.log(books[5].author.lastName);
        }
    // var booksWithFunction = [
    //     createBook("Lord of the Rings", "J.R.R.","Tolkien"),
    //     createBook("The Hobbit, there and back again","J.R.R.", "Tolkien"),
    //     createBook("The little Prince","Antoine",  "Saint-Exupéry"),
    //     createBook("A Tale of Two Cities", "Charles", "Dickens"),
    //     createBook("Da Vinci Code", "Dan", "Brown")
    // ]
    function showBookInfo(book, bookNumber){
            console.log("Book #" + (bookNumber + 1));
            console.log("title: " + book.title);
            console.log("Author: " + book.author.lastName + ", " + book.author.firstName);
            console.log("---");

    }
    books.forEach(showBookInfo);

})();
