const express = require("express");
const logger = require('morgan');

const app = express();
const port = 4000;
const cors = require("cors");
const books = require("./bookData");
const theme = require("./themeData");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/completed/delete", books.removeBook);
app.use("/wishlist/delete", books.removeBook);
app.use("/completed", books.addBook);
app.use("/wishlist", books.addBook);
app.use("/theme", theme.updateTheme);

app.listen(port, () => console.log(`Server ${port} is running!`));