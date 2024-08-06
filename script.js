
const addButton = document.querySelector("#addButton");
const allBooks = document.querySelector("#allBooks");
const dialog = document.querySelector("#inputBox");
const submitForm = document.querySelector("#submitForm");
const titleBox = document.querySelector("#titleBox");
const pagesBox = document.querySelector("#pagesBox");
const authorBox = document.querySelector("#authorBox");
const cancel = document.querySelector("#cancel");
const readStatus = document.querySelector("#readStatus")

let readButtonsArray = []

let myLibrary = [];

function Book(title,author,pages,read){ 

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}



function addBookToLibrary(){
  
    
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


        console.log(`value of read1 is ${myLibrary[i].read}`);

        let readButton = document.createElement("button")
        readButton.classList.add("readButton","readStatusButtons")


        function checkStatus(){
            if(myLibrary[i].read){
                readButton.textContent = `Read`
            }else{readButton.textContent = `Unread`}

        }

        renderedDiv.appendChild(readButton)

        checkStatus()


        readButton.addEventListener('click',()=>{
            
            myLibrary[i].read = !myLibrary[i].read;

            console.log("clicked");
            

            checkStatus()
        })



        renderedDiv.appendChild(renderedTitle);
        renderedDiv.appendChild(renderedAuthor);
        renderedDiv.appendChild(renderedPages);

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





