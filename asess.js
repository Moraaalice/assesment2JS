const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

//Create a function called getAvailableBooks that returns an array of all available books
function getAvailableBooks(books){
    let book = books.title
    return book
}
console.log(getAvailableBooks(books))

//Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author){
    let authors = books.author
    console.log(authors)
}
console.log(getBooksByAuthor(author))
//Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).
function addNewBook(book){
    const book = {
        title:"Born a crime",
        author:"trevor Noah",
        publicationYear:2019,
        isAvailable:true,
    }
    books.push(book)
    console.log(books)
}
//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.
function checkoutBook(title){
    if(title.isAvailable){
        console.log(false)
    }else{
        console.log("Book is not available")
    }
}
checkoutBook(title)

//5. Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook(title){
    if(books.isAvailable){
        
    }
}
