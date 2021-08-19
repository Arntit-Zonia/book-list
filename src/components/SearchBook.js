const Book = ({ book: { title, authors, imageLinks }, id, completed, setCompleted, wishList, setWishList, getTargetBookData }) => {
    const handleAddToList = (e, list, setList, siblingElement) => setList([...list, getTargetBookData(siblingElement)]);

    return (
        <div className="book-container">
            <div className="book" id={id}>
                <h3>{title}</h3>
                
                <img src={imageLinks.thumbnail} alt="Book Cover"/>

                <p>{authors?.toString().replace(",", ", ")}</p>
            </div>

            <button 
                onClick={(e) => handleAddToList(e, completed, setCompleted, e.target.previousElementSibling.id)}>
                Add To Completed
            </button>
            <button 
                onClick={(e) => handleAddToList(e, wishList, setWishList, e.target.previousElementSibling.previousElementSibling.id)}>
                Add To Wishlist
            </button>
        </div>
    );
}

export default Book;
