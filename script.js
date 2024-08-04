
const addButton = document.querySelector("#addButton");
const allBooks = document.querySelector("#allBooks");
const dialog = document.querySelector("#inputBox");
const submitForm = document.querySelector("#submitForm");
const titleBox = document.querySelector("#titleBox");
const pagesBox = document.querySelector("#pagesBox");
const authorBox = document.querySelector("#authorBox");
const cancel = document.querySelector("#cancel");
const readStatus = document.querySelector("#readStatus")

let myLibrary = [{
    title: "bookTitle",
    author:"authorName",
    pages:"69420",
    read:true

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

submitForm.addEventListener('click',()=>{

    event.preventDefault()

    let name1 = titleBox.value
    let author1 = authorBox.value
    let pages1 = pagesBox.value
    let read1 = readStatus.checked
    
    console.log(read1);

    myLibrary.push(new Book(name1,author1,pages1,read1));

    renderBooks()

    dialog.close()    

})

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

        renderedDiv.appendChild(renderedTitle);
        renderedDiv.appendChild(renderedAuthor);
        renderedDiv.appendChild(renderedPages);

        console.log(`value of read1 is ${myLibrary[i].read}`);

        if(myLibrary[i].read){
            let readButton = document.createElement("button")
            readButton.textContent= `Read`
            readButton.classList.add("readButton","readStatusButtons")

            renderedDiv.appendChild(readButton)
        }else{
            let unreadButton = document.createElement("button")
            unreadButton.textContent= `unread`
            unreadButton.classList.add("unreadButton","readStatusButtons")

            renderedDiv.appendChild(unreadButton)
        }




        renderedDiv.appendChild(renderedTitle);
        renderedDiv.appendChild(renderedAuthor);
        renderedDiv.appendChild(renderedPages);
        // renderedDiv.appendChild(renderedRead);

        allBooks.appendChild(renderedDiv);



    }
}

renderBooks()

addButton.addEventListener('click',()=>{
    addBookToLibrary()
})


cancel.addEventListener('click',()=>{
    dialog.close()
})



