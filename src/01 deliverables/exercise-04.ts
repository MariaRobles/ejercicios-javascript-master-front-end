console.log("************** DELIVERABLE 04 *********************");



const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  function isBookRead(books, titleToSearch) {
    // Implementation here  si el libro es de título "tal" es true or false isRead?
    return books.find(book => book.title === titleToSearch).isRead; 
  }
  
  console.log(isBookRead(books, "Canción de hielo y fuego"));

