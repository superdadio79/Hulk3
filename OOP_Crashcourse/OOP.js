// SubClasses
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Inatantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2022', 'Feb');

console.log(mag1.getSummary());

// // Classes
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${thjis.year}`;
//     }

//     getAge () {
//         const years = new Date().getFullYear() - 
//         this.year; 
//     return `${this.title} is ${years} years
//     old`;

//     // revise(newYear) {
//     //     this.year = newYear;
//     //     this.revised = true;
//     // }

//     static topBookStore() {
//         return `Barnes & Noble`;
//     }
// }


// //initiate object
// const Book1 = new Book('Book One', 'John Doe', '2013');

// // console.log(Book1);
// // Book1.revise('2022')
// // console.log(Book1);

// console.log(Book1.topBookStore());



// //  Object of Protos
// const bookProtos = {
//     getSummary: Function() { 
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

//     getAge: function() {
//         const years = new Date().getFullYear() - 
//         this.year; 
//         return `${this.title} is ${years} years
//         old`;
//     }
// }


// // Create Object
// // const Book1 = Object.create(bookProtos);
// // Book1.title = 'Book One';
// // Book1.author = 'John Doe';
// // Book1.year = '2013';

// const Book1 = Object.create(bookProtos, ;
//     title = {value: 'Book One'}
//     author = {value: 'John Doe'},
//     year = {value: '2013'}
// });
// console.log(book1);


// // Inheritance 
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} 
//     in ${this.year}`
// }

// // Magazine Constructor

// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;
// }

// // Inherit Prototype

// Magazine.prototype = Object.create(Book.prototype);

// // Instantiate Magazine

// const mag1 = new Magazine('Mag One', 'John Doe', '2022', 'Jan');

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);
// console.log(mag1.getSummary());


// // Prototype 
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function () {return `${this.title} was written by ${this.author} in ${this.year}`
// }

// // getAge
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year; 
//     return `${this.title} is ${years} years old`;
// };

// // Revise / Change Year

// Book.prototype.revised = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// };

// Instatiate an Object

// const Book1 = new Book('Book1', 'John Doe', '2013');
// const Book2 = new Book('Book2', 'Jane Doe', '2016');

// console.log(Book1);
// Book1.revise('2022');
// console.log(Book2);
// Book2.revise('2022');

// console.log(Book1.getAge());
// console.log(Book2.getAge());

// console.log(Book1.getSummary())
// console.log(Book2.getSummary())

// console.log(Book1);
// console.log(Book2);

// console.log(Book1.getSummary());
// console.log(Book2.getSummary());



// // Constructor 
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function () {return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// // Instatiate an Object
// const Book1 = new Book('Book1', 'John Doe', '2013');
// const Book2 = new Book('Book2', 'Jane Doe', '2016');

// console.log(Book1.getSummary())
// console.log(Book2.getSummary())

// console.log(Book1);
// console.log(Book2);

// const s1 = 'Bonjour';
// console.log(typeof s1);

// const s2 = new String('Bonjour');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion)

// // Object Literal
// const Book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`; 
//     }
// };
// console.log(Book1.getSummary());

// const Book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`; 
//     }
// };
// console.log(Book2.getSummary());
// console.log(Object.values(Book2));
// console.log(Object.keys(Book2));