
const addButton = document.querySelector("#addButton");
const allBooks = document.querySelector("#allBooks");

let myLibrary = [];

function Book(title,author,pages,read){   //,author,pages,read

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

// let HarryPotter = new Book("HarryPotter","JK Rowling",500,true);


function addBookToLibrary(){
    let name1 = prompt("Enter the book name: ")
    let author1 = prompt("Enter the author name: ")
    let pages1 = prompt("Enter the number of pages: ")
    let read1 = prompt("Did you read the book?")

    myLibrary.push(new Book(name1,author1,pages1,read1));  

    renderBooks()

    
    
}

function renderBooks(){
    allBooks.textContent = ``
    for(let i=0;i<myLibrary.length;i++){

        let renderedDiv = document.createElement("div")
        renderedDiv.className = "bookCard"



        let renderedTitle = document.createElement("p")
        renderedTitle.className = "title"
        renderedTitle.textContent= `${myLibrary[i].title}`

        let renderedAuthor = document.createElement("p")
        renderedAuthor.className = "author"
        renderedAuthor.textContent= `${myLibrary[i].author}`

        let renderedPages = document.createElement("p")
        renderedPages.className = "pages"
        renderedPages.textContent = `${myLibrary[i].pages}`

        let renderedRead = document.createElement("p")
        renderedRead.className = "readStatus"
        renderedRead.textContent = `${myLibrary[i].read}`



        // renderedBook.textContent = `Name: ${myLibrary[i].title}
        //                             Author:${myLibrary[i].author}
        //                             Pages:${myLibrary[i].pages}
        //                             ReadStatus:${myLibrary[i].read}`

        renderedDiv.appendChild(renderedTitle);
        renderedDiv.appendChild(renderedAuthor);
        renderedDiv.appendChild(renderedPages);
        renderedDiv.appendChild(renderedRead);

        allBooks.appendChild(renderedDiv);



    }
}

addButton.addEventListener('click',()=>{
    addBookToLibrary()
})



