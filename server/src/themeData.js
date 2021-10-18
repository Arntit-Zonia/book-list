require('dotenv').config({ path: "../.env" });

const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://arntitzonia:${process.env.DB_PASSWORD}@book-list-app.xflfb.mongodb.net/book-list?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const loadTheme = async (req, res) => {
    try {
        await client.connect();

        const database = client.db("book-list");
        const themeCollection = database.collection("theme");

        let getBookData = await themeCollection.findOne({ theme: true });

        if (!getBookData) getBookData = await themeCollection.findOne({ theme: false });

        res.json({ data: getBookData });
  
        await client.close();
    } catch(err) {
      console.log(err);
    }
}

const updateTheme = async (req, res) => {
    try {
        await client.connect();

        const database = client.db("book-list");
        const themeCollection = database.collection("theme");

        const getThemeData = await themeCollection.findOne({ theme: !req.body.theme });
        const setThemeData = { $set: { theme: req.body.theme } }

        const updateTheme = await themeCollection.updateOne(getThemeData, setThemeData);

        console.log(`Theme value updated to ${req.body.theme}`);
  
        await client.close();
    } catch(err) {
      console.log(err);
    }
}

module.exports = { loadTheme, updateTheme };