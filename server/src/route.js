const express = require("express");

const bookDataRoute = require("./bookData");
const themeRoute = require("./themeData");

const router = express.Router();

router.get("/completed/delete", bookDataRoute.removeBook);
router.get("/wishlist/delete", bookDataRoute.removeBook);
router.get("/load/completed", bookDataRoute.loadBooks);
router.get("/load/wishlist", bookDataRoute.loadBooks);
router.get("/completed", bookDataRoute.addBook);
router.get("/wishlist", bookDataRoute.addBook);
router.get("/theme/upload", themeRoute.updateTheme);
router.get("/theme", themeRoute.loadTheme);

module.exports =  router;