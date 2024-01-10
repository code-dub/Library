const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

// const book1 = new Book('The hobbit', 'RR Towlien', 1290, 'not read yet');
// const book2 = new Book('Ramu Kaka', 'Ram prasad', 288, 'read');
// myLibrary.push(book1);
// myLibrary.push(book2);

// console.log(book1.title);
// console.log(book2.info());
// console.log(myLibrary[0]);
// console.log(myLibrary[1]);
// console.log(myLibrary);


