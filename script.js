
const addButton = document.querySelector("#addButton");
const allBooks = document.querySelector("#allBooks");
const dialog = document.querySelector("#inputBox");

let myLibrary = [{
    title: "bookTitle",
    author:"authorName",
    pages:"69420",
    read:"readOrNot"

}];

function Book(title,author,pages,read){   //,author,pages,read

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

// let HarryPotter = new Book("HarryPotter","JK Rowling",500,true);


function addBookToLibrary(){
    // let name1 = prompt("Enter the book name: ")
    // let author1 = prompt("Enter the author name: ")
    // let pages1 = prompt("Enter the number of pages: ")
    // let read1 = prompt("Did you read the book?")

    // myLibrary.push(new Book(name1,author1,pages1,read1));  
    
    dialog.showModal()
    renderBooks()

    
    
}

function renderBooks(){
    allBooks.textContent = ``
    for(let i=0;i<myLibrary.length;i++){

        let renderedDiv = document.createElement("div")
        renderedDiv.className = "bookCard"



        let renderedTitle = document.createElement("p")
        renderedTitle.classList.add("title","info")
        renderedTitle.textContent= `${myLibrary[i].title}`

        let renderedAuthor = document.createElement("p")
        renderedAuthor.classList.add("author","info")
        renderedAuthor.textContent= `Author : ${myLibrary[i].author}`

        let renderedPages = document.createElement("p")
        renderedPages.classList.add("pages","info")
        renderedPages.textContent = `Pages : ${myLibrary[i].pages}`

        let renderedRead = document.createElement("p")
        renderedRead.classList.add("readStatus","info")
        renderedRead.textContent = `Read : ${myLibrary[i].read}`



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

renderBooks()

addButton.addEventListener('click',()=>{
    addBookToLibrary()
})



