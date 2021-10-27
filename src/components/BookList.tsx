import { useSelector } from 'react-redux';

import SearchBook from './SearchBook';
import MyLists from './MyLists';
import { State } from '../state/reducers';

const BookList: React.FC = () => {
    const { searchBooks, route } = useSelector((state: State) => state);

    const renderSearchBookComponent = (): JSX.Element => {
        return (
            <div className="grid-container">
                {searchBooks?.filter((book) => book.imageLinks).map((book, i) => (
                    <SearchBook book={book} key={i} id={i.toString()} />
                ))}
            </div>
        )
    }

    const renderMyListsComponent = (): JSX.Element => {
        return (
            <div className="grid-container">
                 <MyLists />
            </div>
        )
    }

    return (
        route === "Search" ? renderSearchBookComponent() : renderMyListsComponent()
    )
}

export default BookList;