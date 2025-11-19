// Book class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    // mark as issued
    issueBook() {
        this.isIssued = true;
    }

    // mark as returned
    returnBook() {
        this.isIssued = false;
    }
}

// Sample books
const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "102"),
    new Book("Atomic Habits", "James Clear", "103"),
    new Book("Harry Potter", "J.K. Rowling", "104")
];

// Display available books in console
console.log("Available Books:");
books
    .filter(b => !b.isIssued)
    .forEach(b => console.log(`${b.title} (${b.isbn})`));

//Issue Book
document.getElementById("issueBtn").addEventListener("click", () => {
    const input = document.getElementById("isbnInput").value;
    const msg = document.getElementById("msg");

    // Find the book
    const book = books.find(b => b.isbn === input);

    if (!book) {
        msg.textContent = "Book not found!";
        msg.style.color = "red";
        return;
    }

    if (book.isIssued) {
        msg.textContent = "Already issued!";
        msg.style.color = "red";
    } else {
        book.issueBook();
        msg.textContent = `Book Issued: ${book.title}`;
        msg.style.color = "green";
    }
});
