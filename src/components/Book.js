const Book = ({ book, id, myList, setMyList, getTargetBookData }) => {
    const { title, authors, imageLinks } = book;

    const handleMyListBtn = (e) => {
        console.log("Adding to my list...")

        // setMyList([...myList,  e.target.previousElementSibling]);
        
        console.log(getTargetBookData(e.target.previousElementSibling.id));

        setMyList([...myList, getTargetBookData(e.target.previousElementSibling.id)]);
    };
    const handleWishListBtn = (e) => console.log("Adding to wishlist...");

    return (
        <div className="book-container">
            <div className="book" id={id}>
                <h3>{title}</h3>
                
                <img src={imageLinks.thumbnail}/>

                <p>{authors?.toString().replace(",", ", ")}</p>
            </div>

            <button onClick={handleMyListBtn}>Add To My List</button>
            <button onClick={handleWishListBtn}>Add To Wishlist</button>
        </div>
    );
}

export default Book;
