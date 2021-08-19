const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => console.log(res.send(`Server ${port} is running!`)));

app.listen(port, () => console.log(`Server ${port} is running!`));