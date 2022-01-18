let library = [];
addBook("Ender's Game", "Orson Scott Card", 324, false);
addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);
// addBook("Ender's Game", "Orson Scott Card", 324, false);
// addBook("Hitchiker's Guide", "Douglas Adams", 832, false);
// addBook("Red Rising", "Pierce Brown", 382, true);


let library_container = document.getElementById('libraryContainer');
bookDisplayLoop(library_container);

let addBtn = document.getElementById("addBook");
let form = document.getElementById("formContainer");
let cancel = document.getElementById("formRst");

const showForm = function () {
    console.log("pop up the form here");
    form.setAttribute('class', 'container d-block  justify-content-center mt-3 text-light');
    library_container.setAttribute('class', 'container d-none');
    addBtn.disabled = true;
}
addBtn.addEventListener('click', showForm);

const hideForm = function () {
    addBtn.disabled = false;
    library_container.setAttribute('class', 'row justify-content-center');
    form.setAttribute('class', 'd-none');
}
cancel.addEventListener('click', hideForm);

const submitAdd = function () {
    console.log("submitted");
    console.log(form.elements);
    hideForm();
}
form.addEventListener('submit', submitAdd);

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
    let toggle_str = "";

    if (!library.length) {
        library_container.innerHTML = `
        <h1>You haven't added any books yet... get reading!</h1>`;
        return
    }
    for (let i = 0; i < library.length; i++) {
        if (library[i].read) {
            toggle_str = "Read";
        }
        else {
            toggle_str = "Unread";
        }
        console.log('adding a book');
        let thisBook = document.createElement('div');
        let classStr = 'border border-dark rounded-lg bg-secondary text-light col-md-5 col-lg-3 p-5 mx-1 my-1';
        let checked = 'checked';
        if (library[i].read) { classStr = classStr.concat(' read'); }
        else {
            checked = 'un'.concat(checked);
        }
        thisBook.setAttribute('class', classStr);
        thisBook.innerHTML = `
        <h2>${library[i].title}</h2>
        <h2>By: ${library[i].author}</h2>
        <h2>pages: ${library[i].pages}</h2>
        <div class="custom-control custom-switch justify-self-right">
        <input type="checkbox" class="custom-control-input" ${checked} id="customSwitch${i}">
        <label class="custom-control-label" for="customSwitch${i}">${toggle_str}</label>
        </div>
        <button id='btn${i}' class='btn btn-dark'>Remove</button>
        `
        library_container.appendChild(thisBook);
    }
}








