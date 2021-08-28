const express = require("express");
const router =  express.Router();
const bookDataRoute = require("./bookData");
const themeRoute = require("./themeData");

router.get("/completed/delete", bookDataRoute.removeBook);
router.get("/wishlist/delete", bookDataRoute.removeBook);
router.get("/completed", bookDataRoute.addBook);
router.get("/wishlist", bookDataRoute.addBook);
router.get("/theme", themeRoute.updateTheme);

module.exports =  router;