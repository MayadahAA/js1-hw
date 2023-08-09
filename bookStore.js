const Books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 366,
        available: false,
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        pages: 279,
        available: true,
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        pages: 671,
        available: false,
    },
    {
        title: 'Alice in Wonderland',
        author: 'Jane Carruth',
        pages: 96,
        available: false,
    },
    {
        title: 'Green Eggs and Ham',
        author: 'Dr. Seuss',
        pages: 64,
        available: true,
    },
    {
        title: 'King Lear',
        author: 'William Shakespeare',
        pages: 338,
        available: true,
    },
  
];

for (let i = 0; i < Books.length; i++) {
    let title = Books[i].title;
    let author = Books[i].author;
    let pages = Books[i].number_of_pages;
        console.log(author +": "+ title, pages);
}

function borrowBook(title, borrower) {
    Books.forEach(book => {
        // نشيك اذا اسم الكتاب متوفر
        if (book.title === title) {
            titleAvailable = true;
            // اذا موجود الكتاب نشيك اذا متوفر للاعارة
            if (book.available) {
                // اذا متوفر نحوله لfalse
                book.available = false;
                //   نخزن اسم المستعير في قيمة في object 
                book.borrower = borrower;
            } else {
                console.log('The book is not available for borrowing');
            }
        }
    });
}
//امثلة 
borrowBook("The Hobbit", "Norah");
borrowBook("Pride and Prejudice", "Ahmad");
borrowBook("Green Eggs and Ham", "sarah");

function returnBook(title) {
    const borrowedBooks = Books.filter(book => book.borrower);
    const book = borrowedBooks.find(book => book.title === title);
  
    if (book) {
      book.available = true;
      delete book.borrower;
    } else {
      console.log("The book was never borrowed.");
    }
  }
returnBook("Green Eggs and Ham");
returnBook("Alice in Wonderland");
console.log(Books);

for (let i = 0; i < Books.length; i++) {
    let title = Books[i].title;
    let author = Books[i].author;
    let pages = Books[i].pages;
    let borrower = Books[i].borrower;
        console.log(author +": "+ title, pages, borrower);
}

function addBook(book) {
    Books.push(book);
    
}
const bookL = {title: 'The Old Man and the Sea',
        author: 'Ernest Hemingway',
        pages: 96,
        available: true}

addBook(bookL);
console.log(Books);

function searchBook(search_Term) {
    return Books.find(book => book.title === search_Term || book.author === search_Term || book.borrower === search_Term);
}
console.log(searchBook('Ahmad'));