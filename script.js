
const addButton = document.querySelector("#addButton");
const allBooks = document.querySelector("#allBooks");

let myLibrary = [];

function Book(title){   //,author,pages,read

    this.title = title;
    // this.author = author;
    // this.pages = pages;
    // this.read = read;
    
}

// let HarryPotter = new Book("HarryPotter","JK Rowling",500,true);


function addBookToLibrary(){
    let name1 = prompt("Enter the book name: ")
    // let author1 = prompt("Enter the author name: ")
    // let pages1 = prompt("Enter the number of pages: ")
    // let read1 = prompt("Did you read the book?")

    myLibrary.push(new Book(name1));  //,author1,pages1,read1

    renderBooks()

    
    
}

function renderBooks(){
    allBooks.textContent = ``
    for(let i=0;i<myLibrary.length;i++){
        let renderedBook = document.createElement("p")
        renderedBook.textContent = `Name: ${myLibrary[i].title}`

        allBooks.appendChild(renderedBook);
    }
}

addButton.addEventListener('click',()=>{
    addBookToLibrary()
})



