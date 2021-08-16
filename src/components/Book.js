const Book = ({ book }) => {
    const { title, authors, imageLinks } = book;

    return (
        <div className="book-container">
            <h3>{title}</h3>
            { 
                imageLinks?.thumbnail ? <img src={imageLinks?.thumbnail}/> 
                : <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-data-found-1965030-1662565.png"/>
            }
            <p>{authors?.toString().replace(",", ", ")}</p>
        </div>  
    );
}

export default Book;
