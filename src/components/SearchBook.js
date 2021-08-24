import { uploadBookData } from "../api/";

const Book = ({ book: { title, authors, imageLinks }, id, completed, setCompleted, wishList, setWishList, getTargetBookData }) => {
    const handleAddToList = (e, list, setList, siblingElement) => {
        const existingBook = list.find((book) => book.imageLinks.thumbnail === getTargetBookData(siblingElement).imageLinks.thumbnail);

        if (!existingBook) {
            setList([...list, getTargetBookData(siblingElement)]);
    
            e.target.id === "completed-btn" ? uploadBookData("completed", getTargetBookData(siblingElement)) : uploadBookData("wishlist", getTargetBookData(siblingElement));
        }
    };

    return (
        <div className="book-container">
            <div className="book" id={id}>
                <h3 className="book-title">{title}</h3>
                
                <img className="thumbnail" src={imageLinks.thumbnail} alt="Book Cover"/>

                <p>{authors?.toString().replace(",", ", ")}</p>
            </div>
            <div className="btn-container">
                <button
                    id="completed-btn"
                    className="btn" 
                    onClick={(e) => handleAddToList(e, completed, setCompleted, e.target.parentNode.previousElementSibling.id)}>
                    Add To Completed
                </button>
                <button
                    id="wishlist-btn" 
                    className="btn"
                    onClick={(e) => handleAddToList(e, wishList, setWishList, e.target.previousElementSibling.parentNode.previousElementSibling.id)}>
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
}

export default Book;
