import { useState, useEffect } from 'react';

import SearchBook from './SearchBook';
import MyLists from './MyLists';
import { getBooksData } from '../api/';

const BookList = ({ books, route }) => {
    const [completed, setCompleted] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        getBooksData("completed").then((data) => setCompleted(data));
        getBooksData("wishlist").then((data) => setWishList(data));
    }, []);

    const getTargetBookData = (targetBook) => books.find((book, i) =>  i === Number(targetBook));

    const renderSearchBookComponent = () => {
        return (
            <div className="grid-container">
                {books?.filter((book) => book.imageLinks).map((book, i) => (
                    <SearchBook 
                        book={book} 
                        key={i} 
                        id={i} 
                        completed={completed} 
                        setCompleted={setCompleted} 
                        wishList={wishList}
                        setWishList={setWishList}
                        getTargetBookData={getTargetBookData} 
                    />
                ))}
            </div>
        )
    }

    const renderMyListsComponent = () => {
        return (
            <div className="grid-container">
                 <MyLists 
                    completed={completed} 
                    setCompleted={setCompleted} 
                    wishList={wishList}
                    setWishList={setWishList}
                    route={route}
                />
            </div>
        )
    }

    return (
        route === "Search" ? renderSearchBookComponent() 
        : renderMyListsComponent()
    )
}

export default BookList;