const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const books = require("./bookData");
const theme = require("./themeData");

const app = express();
const port = 4000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/completed/delete", books.removeBook);
app.use("/wishlist/delete", books.removeBook);
app.use("/load/completed", books.loadBooks);
app.use("/load/wishlist", books.loadBooks);
app.use("/completed", books.addBook);
app.use("/wishlist", books.addBook);
app.use("/theme/upload", theme.updateTheme);
app.use("/theme", theme.loadTheme);

app.listen(port, () => console.log(`Server ${port} is running!`));