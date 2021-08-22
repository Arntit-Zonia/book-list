const express = require("express");
const router =  express.Router();
const bookDataRoute = require("./bookData");

router.get("/completed/delete", bookDataRoute.removeBook);
router.get("/wishlist/delete", bookDataRoute.removeBook);
router.get("/completed", bookDataRoute.addBook);
router.get("/wishlist", bookDataRoute.addBook);

module.exports =  router;