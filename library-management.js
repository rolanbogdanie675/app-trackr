Here's an example of a JavaScript code that meets the given criteria. This code is a simplified implementation of a library management system. The code allows users to perform various operations such as adding, searching, and borrowing books from a library.

```javascript
// filename: library-management.js

// Define the Book class
class Book {
  constructor(title, author, genre, availability) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }
}

// Define the Library class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Search for books by title or author
  search(titleOrAuthor) {
    const results = [];
    for (const book of this.books) {
      if (
        book.title.toLowerCase().includes(titleOrAuthor.toLowerCase()) ||
        book.author.toLowerCase().includes(titleOrAuthor.toLowerCase())
      ) {
        results.push(book);
      }
    }
    return results;
  }

  // Borrow a book from the library
  borrowBook(title) {
    for (const book of this.books) {
      if (book.title === title) {
        if (book.availability > 0) {
          // Book is available, borrow it
          book.availability--;
          return true;
        } else {
          // Book is not available
          return false;
        }
      }
    }
    // Book not found in the library
    return false;
  }
}

// Create a library instance
const library = new Library("My Library");

// Add books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 3));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1));
library.addBook(new Book("1984", "George Orwell", "Fiction", 0));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", "Fiction", 2));
library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 5));

// Search for books
const searchResults = library.search("Fiction");
console.log("Search Results:");
for (const book of searchResults) {
  console.log(`${book.title} by ${book.author}`);
}

// Borrow a book
const bookTitle = "1984";
if (library.borrowBook(bookTitle)) {
  console.log(`Successfully borrowed "${bookTitle}".`);
} else {
  console.log(`"${bookTitle}" is not available.`);
}
```

This code demonstrates an organized implementation of a library management system using classes and methods. It includes features like adding books, searching for books by title or author, and borrowing books with availability checks. Although this example is simplified, a real-world implementation would involve additional complexity and features.