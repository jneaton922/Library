const library = [];
const addBtn = document.getElementById("addBook");
const form = document.getElementById("formContainer");
const cancel = document.getElementById("formRst");


let library_container = document.getElementById('libraryContainer');
bookDisplayLoop(library_container);

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
    hideForm();
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pageInput").value;
    let readCheck = document.getElementById("readCheck").value;

    addBook(title, author, pages, readCheck);
    bookDisplayLoop(document.getElementById("libraryContainer"));
}
form.addEventListener('submit', submitAdd);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    const toggleRead = function () {
        if (this.read) {
            this.read = false;
        }
        else {
            this.read = true;
        }
    }
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

function removeBook(e) {
    console.log(e.target.id);
    let targetBookIndex = e.target.id.slice(3);
    library.splice(targetBookIndex, 1);
    bookDisplayLoop(document.getElementById('libraryContainer'));
}

function bookDisplayLoop(library_container) {
    library_container.innerHTML = "";
    let toggle_str = "";

    if (!library.length) {
        library_container.innerHTML = `
        <h1 class='text-light'>You haven't added any books yet... get reading!</h1>`;
        return
    }
    for (let i = 0; i < library.length; i++) {
        if (library[i].read) {
            toggle_str = "Read";
        }
        else {
            toggle_str = "Unread";
        }
        let thisBook = document.createElement('div');
        thisBook.setAttribute('data-attribute', `book${i}`);
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
        let remove = document.getElementById(`btn${i}`);
        remove.addEventListener('click', removeBook);
    }
}








