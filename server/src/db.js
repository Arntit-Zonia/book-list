const { MongoClient } = require("mongodb");

// cluster url
const url = "mongodb+srv://arntitzonia:<password>@book-list-app.xflfb.mongodb.net/test";
const client = new MongoClient(url);
const dbName = "book-list";

async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection
         const bookCollection = db.collection("books");

         let bookDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23),
             "death": new Date(1954, 5, 7),
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         // Insert a single document, wait for promise so we can read it back
         const addNewCollectionEntry = await bookCollection.insertOne(bookDocument);

         // Find one document
         const myDoc = await bookCollection.findOne();

         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);