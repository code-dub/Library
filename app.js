// declaring global variables 

const myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const form = document.querySelector('form');
const table = document.querySelector('.display-table');
const sidebar = document.querySelector('.sidebar');
const addBooks = document.querySelector('.add-books');
const closeSidebar = document.querySelector('.close-sidebar');

//hide or show side form

addBooks.addEventListener('click', (e) => {

    sidebar.style.display = 'block';

})

closeSidebar.addEventListener('click', (e) => {
    sidebar.style.display = 'none';
})

//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.statusChange = function (){
    console.log(this.read);
    console.log(typeof this.read)

    if(this.read === "Yes"){
        this.read = "No";
        console.log(this.read);
    } else {
        this.read = "Yes";
    }
}



// function to get user input and create a new book instance and push into array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(title.value, author.value, pages.value, read.value);
    const newBook = new Book(title.value, author.value, pages.value, read.value)
    myLibrary.push(newBook);
    console.log(myLibrary);
    showBooks();
})


// function to parse the array and display in the table
const main = document.querySelector('.main');
const display = document.querySelector('.display');

function showBooks(){
    main.style.display = 'block';
    while (display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
    
    myLibrary.forEach(element => {
        
        const mainCard = document.createElement('div');
        const showTitle = document.createElement('h3');
        const showAuthor = document.createElement('h4');
        const showPages = document.createElement('h4');
        const showRead = document.createElement('div');
        const toggleBtn = document.createElement('button')
        const removeBtn = document.createElement('button');

        showTitle.textContent = `Title: ${element.title}`;
        showAuthor.textContent = `Author: ${element.author}`;
        showPages.textContent = `No. of Pages: ${element.pages}`;
        showRead.textContent = element.read;

        removeBtn.classList.add('remove-button');
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', (e) => {
            display.removeChild(mainCard);
            if (myLibrary.indexOf(element) > -1 ){
                myLibrary.splice(myLibrary.indexOf(element), 1);
            };
        })

        toggleBtn.classList.add('toggle-btn');
        toggleBtn.textContent = 'Change status';
        toggleBtn.style.margin = '5px';
        toggleBtn.addEventListener('click', (e) => {
            element.statusChange();
            showBooks();
        })

        showRead.appendChild(toggleBtn);

        mainCard.appendChild(showTitle);
        mainCard.appendChild(showAuthor);
        mainCard.appendChild(showPages);
        mainCard.appendChild(showRead);
        mainCard.appendChild(removeBtn);
        mainCard.classList.add('card-display');

        display.appendChild(mainCard);

    });

}

