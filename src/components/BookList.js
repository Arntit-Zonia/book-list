import { useState } from 'react';

import SearchBook from './SearchBook';
import MyLists from './MyLists';

const BookList = ({ books, selectVal }) => {
    const [completed, setCompleted] = useState([]);
    const [wishList, setWishList] = useState([]);

    const getTargetBookData = (targetBook) => books.find((book, i) =>  i === Number(targetBook));

    const renderSearchBookComponent = () => {
        return (
            <div>
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
            <MyLists 
                completed={completed} 
                setCompleted={setCompleted} 
                wishList={wishList}
                setWishList={setWishList}
                selectVal={selectVal}
            />
        )
    }

    return (
        selectVal === "search" ? renderSearchBookComponent() 
        : renderMyListsComponent()
    )
}

export default BookList;