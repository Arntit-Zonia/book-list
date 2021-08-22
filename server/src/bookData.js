const fs = require("fs");

const loadBooks = (bookStorage) => {
    try {
        return JSON.parse(fs.readFileSync(bookStorage, "utf-8"));
    }

    catch(err) {
        return [];
    }
}

const addBook = (req, res) => {
    const bookListPath = `./book-lists${req.baseUrl}.json`;

    console.log("Adding Book...");
    console.log(bookListPath);
    
    const loadStoredBooksData = loadBooks(bookListPath);
  
    if (req.body.title) {
        loadStoredBooksData.push(req.body);
        fs.writeFileSync(bookListPath, JSON.stringify(loadStoredBooksData));
    }
    
    res.json({ data: loadBooks(bookListPath) });
}

const removeBook = (req, res) => {
    const bookListPath = `./book-lists${req.baseUrl.replace("/delete", "")}.json`;

    console.log("Removing Book...");
    console.log(bookListPath);

    const loadStoredBooksData = loadBooks(bookListPath);

    const filteredBooks = loadStoredBooksData.filter((book) => book.imageLinks.thumbnail !== req.body.imageLinks.thumbnail);
    
    if (loadStoredBooksData.length) fs.writeFileSync(bookListPath, JSON.stringify(filteredBooks));

    res.json({ data: [] });
}

module.exports = { addBook, removeBook };