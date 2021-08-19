const express = require("express");

const app = express();
const port = 4000;
const cors = require("cors");
const books = require("./bookData");

app.use(cors());
app.use("/completed", books.completedBooks);
app.use("/wishlist", books.wishlist);

app.listen(port, () => console.log(`Server ${port} is running!`));