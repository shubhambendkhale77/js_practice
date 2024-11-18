// solution-3.js

import { Book } from './solution_1.js';
import { Library } from './solution_2.js';

// Create some book instances
let book1 = new Book('Book One', 'Author One', Book.generateISBN(), 5);
let book2 = new Book('Book Two', 'Author Two', Book.generateISBN(), 3);

// Create a library instance
let library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// Display books
console.log(library.displayBooks());

// Search for books by title
console.log(library.searchBooksByTitle('Book One'));

// Search for books by author
console.log(library.searchBooksByAuthor('Author Two'));

// Remove a book by ISBN
library.removeBook(book1.isbn);

// Display books after removal
console.log(library.displayBooks());
