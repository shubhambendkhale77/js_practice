// solution-1.js

class Book {
    // Constructor to initialize book properties
    constructor(title, author, isbn, availableCopies) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._availableCopies = availableCopies;
    }

    // Getter and setter for availableCopies
    get availableCopies() {
        return this._availableCopies;
    }

    set availableCopies(value) {
        this._availableCopies = value;
    }

    // Private method to validate ISBN format
    #validateISBN(isbn) {
        // Simple validation for example purposes
        return typeof isbn === 'string' && isbn.length === 13;
    }

    // Setter for isbn with validation
    set isbn(value) {
        if (this.#validateISBN(value)) {
            this._isbn = value;
        } else {
            console.error('Invalid ISBN format.');
        }
    }

    // Getter for isbn
    get isbn() {
        return this._isbn;
    }

    // Static method to generate random ISBN
    static generateISBN() {
        return Math.random().toString().slice(2, 15);
    }
}

export { Book };
