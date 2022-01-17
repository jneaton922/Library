let library = [];
addBook("Ender's Game", "Orson Scott Card", 324, false);
addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
addBook("Red Rising", "Pierce Brown", 382, true);
let library_container = document.getElementById('library-container');
bookDisplayLoop(library_container);

let addBtn = document.getElementById("addBook");
let form = document.getElementById("newForm");

const showForm = function () {
    console.log("pop up the form here");
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let = read_string = '';
    if (this.read) {
        read_string = "already read it.";
    }
    else {
        read_string = "not read yet";
    }
    this.read_string = read_string;

    const toggleRead = function () {
        if (this.read) {
            this.read = false;
            read_string = "not read yet";
        }
        else {
            this.read = true;
            read_string = "already read it";
        }
    }
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    library.push(newBook);
    console.log(library.length);
}

function bookDisplayLoop(library_container) {
    library_container.innerHTML = "";
    for (let i = 0; i < library.length; i++) {
        console.log('adding a book');
        let thisBook = document.createElement('div');
        thisBook.setAttribute('class', 'book-card border border-dark rounded-lg bg-secondary text-light col-sm-6 col-lg-4 p-5 mx-1 my-1');
        thisBook.innerHTML = `
        <h1>${library[i].title}</h1>
        <h2>By: ${library[i].author}</h2>
        <h2>pages: ${library[i].pages}</h2>
        <h2>${library[i].read_string}</h2>
        <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch${i}">
        <label class="custom-control-label" for="customSwitch${i}">Toggle this switch element</label>
        </div>
        <button class='btn btn-primary'>Remove</button>
        `
        library_container.appendChild(thisBook);
    }
}








