function addBook(title, author, libraryID) {
  //retrieves the book title from the title textbox
  //finish the implementation -- get the author, create a book object, and add to the library array
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const addBtn = document.getElementById("addBtn");

  let newBook = {};

  newBook.title = title;

  newBook.author = author;

  newBook.libraryID = libraryID;

  library.push(newBook);

  return newBook;
}
