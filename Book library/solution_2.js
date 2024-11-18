// solution-2.js

import { Book } from './solution_1.js';

class Library {
    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Remove a book from the library by ISBN
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    // Search for books by title
    searchBooksByTitle(title) {
        return this.books.filter(book => book._title.includes(title));
    }

    // Search for books by author
    searchBooksByAuthor(author) {
        return this.books.filter(book => book._author.includes(author));
    }

    // Display all books in the library
    displayBooks() {
        return this.books;
    }
}

export { Library };
