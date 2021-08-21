const express = require("express");
const router =  express.Router();
const bookDataRoute = require("./bookData");

router.get("/completed/delete", bookDataRoute.removeCompletedBook);
router.get("/completed", bookDataRoute.completedBooks);
router.get("/wishlist", bookDataRoute.wishlist);


module.exports =  router;