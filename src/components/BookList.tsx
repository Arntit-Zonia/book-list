import { useState } from 'react';

import SearchBook from './SearchBook';
import MyLists from './MyLists';
import { BookListProps, Books } from '../interfaces/src/AppInterface';

const BookList: React.FC<BookListProps> = ({ books, route, handleTheme }) => {
    const [completed, setCompleted] = useState<Books[]>([]);
    const [wishList, setWishList] = useState<Books[]>([]);
    const [loadCompletedBooks, setLoadCompletedBooks] = useState(true);
    const [loadWishlistBooks, setLoadWishlistBooks] = useState(true);

    const getTargetBookData = (targetBook: string | undefined): Books => books.filter((_book, i) =>  i === Number(targetBook))[0];

    const renderSearchBookComponent = (): JSX.Element => {
        return (
            <div className="grid-container">
                {books?.filter((book) => book.imageLinks).map((book, i) => (
                    <SearchBook 
                        book={book} 
                        key={i} 
                        id={i.toString()} 
                        completed={completed} 
                        setCompleted={setCompleted} 
                        wishList={wishList}
                        setWishList={setWishList}
                        getTargetBookData={getTargetBookData}
                        handleTheme={handleTheme}
                    />
                ))}
            </div>
        )
    }

    const renderMyListsComponent = (): JSX.Element => {
        return (
            <div className="grid-container">
                 <MyLists 
                    completed={completed} 
                    setCompleted={setCompleted} 
                    wishList={wishList}
                    setWishList={setWishList}
                    route={route}
                    handleTheme={handleTheme}
                    loadCompletedBooks={loadCompletedBooks}
                    setLoadCompletedBooks={setLoadCompletedBooks}
                    loadWishlistBooks={loadWishlistBooks}
                    setLoadWishlistBooks={setLoadWishlistBooks}
                />
            </div>
        )
    }

    return (
        route === "Search" ? renderSearchBookComponent() : renderMyListsComponent()
    )
}

export default BookList;