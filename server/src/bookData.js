require('dotenv').config({ path: "../.env" });

const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://arntitzonia:${process.env.DB_PASSWORD}@book-list-app.xflfb.mongodb.net/book-list?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const loadBooks = async (req, res) => {
    try {
        await client.connect();

        const database = client.db("book-list");
        let bookCollection;
        
        req.baseUrl.indexOf("completed") !== -1 ? bookCollection = database.collection("completed-books"): bookCollection = database.collection("wishlist-books");

        const getBookData = await bookCollection.find({}).toArray();

        res.json({ data: getBookData });
  
        await client.close();
    } catch(err) {
      console.log(err);
    }
}

const addBook = async (req, res) => {
  try {
    await client.connect();

    const bookCollection = `${req.baseUrl.replace("/", "")}-books`;

    const database = client.db("book-list");
    const storedBooks = database.collection(bookCollection);

    if (req.body.title) {
        const result = await storedBooks.insertOne(req.body);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } 

  } finally {
    await client.close();
  }
}

const removeBook = async (req, res) => {
    try {
        await client.connect();

        const database = client.db("book-list");
        let bookCollection;
        
        req.baseUrl.indexOf("completed") !== -1 ? bookCollection = database.collection("completed-books"): bookCollection = database.collection("wishlist-books");

        const deleteDoc = {
            imageLinks: {
                smallThumbnail: req.body.imageLinks.smallThumbnail,
                thumbnail: req.body.imageLinks.thumbnail
            } 
        }

        const result = await bookCollection.deleteOne(deleteDoc);

        if (result.deletedCount === 1) {
          console.log("Successfully deleted one document.");
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
      } finally {
        await client.close();
    }
}

module.exports = { loadBooks, addBook, removeBook };