import { useState } from 'react';

import Book from './Book';
import MyList from './MyList';

const BookList = ({ books, selectVal }) => {
    const [myList, setMyList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const getTargetBookData = (targetBook) => books.find((book, i) =>  i === Number(targetBook));

    const renderSearchComponent = () => {
        return (
            <div>
                {books?.filter((book) => book.imageLinks).map((book, i) => (
                    <Book book={book} key={i} id={i} myList={myList} setMyList={setMyList} getTargetBookData={getTargetBookData} />
                ))}
            </div>
        )
    }

    const renderMyListComponent = () => {
        return (<MyList myList={myList} setMyList={setMyList} />)
    }

    return (
        selectVal === "search" ? renderSearchComponent() 
        : renderMyListComponent()
    )
}

export default BookList;