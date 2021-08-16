import Book from './Book';

const BookList = ({ books }) => {

    return (
        <div>
            {books?.map((book, i) => (
                <Book book={book} key={i} />
            ))}
        </div>
    )
}

export default BookList;