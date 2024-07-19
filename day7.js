//Activity 1: Object creation and access

const book = {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year : 1997
};

console.log("Book Details is as :", book);

console.log("Title :",book.title);
console.log("Author name :", book.author);

console.log("Activity 1 ✅");

//Activity 2: Object Methods

const books ={
    title : "Atomic Habits",
    author: "James Clear",
    year : 2018,
    getBookInfo : function(){
        return `${books.title} by ${books.author}.`
    },
    updateYear :function(newYear){
        books.year = newYear;

    }
};

console.log(books.getBookInfo());
books.updateYear(2024);
console.log(books);
console.log("Activity 2✅");

//Activity 3: Nested Objects

const book1 = {
    title: "Bhagwat Gita",
    author: "Maharishi Vedvyas",

};
const book2 ={
    title: "Ramayana",
    author:"Valmiki",
};

const library = {
    name : "Divya's Library",
    books :[book1,book2]
};

console.log(library);

console.log("Library Name :",library.name);

console.log("Title name :")

library.books.forEach(books =>{
    console.log(books.title)
})

console.log("Activity 3 ✅");

//Activity 4: this keyword

let book3 = {
    title: "JavaScript",
    author:"Hitesh Chaoudhary",
    year: 2024,
    getTitleAndYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

console.log(book3.getTitleAndYear());

console.log("Activity 4 ✅");

//Activity 5 : Object iteration

for(let property in book){
    console.log(`${property}: ${book[property]}`);
}

console.log("Keys:",Object.keys(book));

console.log("Values:",Object.values(book));

console.log("Activity 5✅");







