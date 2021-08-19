const completedBooks = (req, res) => {
    res.json({ data: ["Completed"] });
}

const wishlist = (req, res) => {
    res.json({ data: ["Wishlist"] });
}

module.exports = { completedBooks, wishlist };