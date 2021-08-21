const fs = require("fs");

const loadBooks = (bookStorage) => {
    try {
        return JSON.parse(fs.readFileSync(bookStorage, "utf-8"));
    }

    catch(err) {
        return [];
    }
}

const completedBooks = (req, res) => {
    console.log("Adding completedBooks");
    
    const loadStoredBooksData = loadBooks("./book-lists/completed.json");
    const obj = {
        title: req.body.title,
        thumbnail: req.body.imageLinks?.thumbnail,
        authors: req.body.authors?.toString().replace(",", ", ")
    }

    if (obj.title) {
        loadStoredBooksData.push(obj);
        fs.writeFileSync("./book-lists/completed.json", JSON.stringify(loadStoredBooksData));
    }
    
    res.json({ data: loadBooks("./book-lists/completed.json") });
}

const removeCompletedBook = (req, res) => {
    console.log("Removing completedBook");
    
    const loadStoredBooksData = loadBooks("./book-lists/completed.json");

    const filteredBooks = loadStoredBooksData.filter((book) => book.thumbnail !== req.body.imageLinks?.thumbnail);

    // console.log(filteredBooks);
    
    if (loadStoredBooksData.length) fs.writeFileSync("./book-lists/completed.json", JSON.stringify(filteredBooks));

    res.json({ data: [] });
}

const wishlist = (req, res) => {
    console.log("Adding book to wishlist");

    res.json({ data: [] });
    // res.json({ data: ["Wishlist"] });
}

module.exports = { completedBooks, wishlist, removeCompletedBook };