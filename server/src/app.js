const express = require("express");
const logger = require('morgan');

const app = express();
const port = 4000;
const cors = require("cors");
const books = require("./bookData");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/completed/delete", books.removeCompletedBook);
app.use("/completed", books.completedBooks);
app.use("/wishlist", books.wishlist);

app.listen(port, () => console.log(`Server ${port} is running!`));