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
    console.log("Something happening on completedBooks");
    
    const loadStoredBooksData = loadBooks("./book-lists/completed.json");
    const obj = {
        title: req.body.title,
        thumbnail: req.body.imageLinks.thumbnail,
        authors: req.body.authors?.toString().replace(",", ", ")
    }

    // console.log(`Completed Books Stored: ${JSON.stringify(loadStoredBooksData)}`);

    loadStoredBooksData.push(obj);
    
    // console.log(`New Completed Books Stored: ${JSON.stringify(loadStoredBooksData)}`);

    fs.writeFileSync("./book-lists/completed.json", JSON.stringify(loadStoredBooksData));

    res.json({ data: [] });
}

const wishlist = (req, res) => {
    console.log("Something happening on wishlist");

    res.json({ data: [] });
    // res.json({ data: ["Wishlist"] });
}

module.exports = { completedBooks, wishlist };