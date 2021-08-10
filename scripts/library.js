let library = [];
addBook("Ender's Game","Orson Scott Card",540,false);
addBook("Hitchiker's Guide", "Douglas Adams",356, false);
let library_container = document.getElementsByClassName('library-container');
for (var i = 0; i < library_container.length; i++){
    bookDisplayLoop(library_container[i]);
}


function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    let = read_string = '';
    if (this.read){
        read_string = "already read it.";
    }
    else{
        read_string = "not read yet";
    }
    this.read_string = read_string
    info = function() {
        let ret_str = this.title+" by "+this.author+", "+pages+" pages, "+read_string;
        return ret_str;
    }
}

function addBook(title,author,pages,read){
    let newBook = new Book(title,author,pages,read);
    console.log(newBook);
    library.push(newBook);
    console.log(library.length);
}

function bookDisplayLoop(library_container){
    library_container.innerHTML="";
    for (let i = 0; i< library.length; i++){
        console.log('adding a book');
        let thisBook = document.createElement('div');
        thisBook.setAttribute('class','book-card');

        thisBook.innerHTML = `
        <h1>${library[i].title}</h1>
        <h2>By: ${library[i].author}</h2>
        <h2>pages: ${library[i].pages}</h2>
        <h2>${library[i].read_string}</h2>
        <button>Remove</button>
        `
        library_container.appendChild(thisBook);
    }
}

function newBookForm() {
    document.getElementById("newBookForm").style.display = "block";
}

function closeBookForm(){
    document.getElementById("newBookForm").style.display = "none";
}

function addBookFromFormData(){
    console.log("in form add func");
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').value;
    addBook(title,author,pages,read);
    let library_container = document.getElementsByClassName('library-container');
    for (var i = 0; i < library_container.length; i++){
        bookDisplayLoop(library_container[i]);
    }
    return false;
}




