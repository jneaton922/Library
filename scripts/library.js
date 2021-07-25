let library = [];

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    info = function() {
        let = read_string = '';
        if (this.read){
            read_string = "already read it.";
        }
        else{
            read_string = "not read yet";
        }
        
        let ret_str = this.title+" by "+this.author+", "+pages+" pages, "+read_string;
        return ret_str;
    }
}

function addBook(title,author,pages,read){
    let newBook = new Book(title,author,pages,read);
    library.push(newBook);
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
        `
        library_container.appendChild(thisBook);
    }
}


addBook("Ender's Game","Orson Scott Card",540,false);
addBook("Hitchiker's Guide", "Douglas Adams",356, false);
let library_container = document.getElementsByClassName('library-container');
for (var i = 0; i < library_container.length; i++){
    bookDisplayLoop(library_container[i]);
}

