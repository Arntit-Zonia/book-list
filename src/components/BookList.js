import { useState } from 'react';

import Book from './Book';
import MyList from './MyList';

const BookList = ({ books, selectVal }) => {
    const [myList, setMyList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const getTargetBookData = (targetBook) => {
        // let result = null;

        return books.find((book, i) =>  i === Number(targetBook));

        // return books.find((book, i) => {
        //     if (i === Number(targetBook)) {
        //         console.log(book);

        //         result = book;
        //     }

        //     return result;
        // });
    }

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
        return (<MyList book={myList} />)
    }

    return (
        selectVal === "search" ? renderSearchComponent() 
        : renderMyListComponent()
    )
}

export default BookList;