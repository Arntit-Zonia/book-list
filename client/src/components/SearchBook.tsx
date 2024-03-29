import { useEffect } from "react";
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from "./Spinner";
import { uploadBookData } from "../api";
import { Books } from "../interfaces/src/AppInterface";
import { State } from '../state/reducers';
import { booksAction } from "../state/interfaces/interfaces";
import { ActionTypes } from "../state/action-types";
import * as actionCreators from "../state/action-creators/index";

interface SearchBookProps {
    book: Books;
    id: string;
}

const SearchBook: React.FC<SearchBookProps> = ({ book: { title, authors, imageLinks }, id }) => {
    const { searchBooks, switchVal, completedBooks, wishlistBooks, isLoading } = useSelector((state: State) => state);
    const { setCompletedBooks, setWishlistBooks, setIsLoading } = bindActionCreators(actionCreators, useDispatch());

    useEffect(() => {
        if (isLoading) setTimeout(() => setIsLoading(false), 100);
    }, [title]);

    const getTargetBookData = (targetBook: string | undefined): Books => searchBooks?.filter((_book, i) => i === Number(targetBook))[0];
    
    const handleAddToList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, list: Books[], setList: { (books: Books[]): (dispatch: Dispatch<booksAction<ActionTypes.COMPLETED_BOOKS | ActionTypes.WISHLIST_BOOKS>>) => void;}, siblingElement: string | undefined) => {
        const targetId = (e.target as HTMLElement).id;

        const existingBook = list?.find((book: Books): boolean => book.imageLinks.thumbnail === getTargetBookData(siblingElement)?.imageLinks.thumbnail);

        if (!existingBook) {
            setList([...list, getTargetBookData(siblingElement)]);
    
            targetId === "completed-btn" ? uploadBookData("completed", getTargetBookData(siblingElement)) : uploadBookData("wishlist", getTargetBookData(siblingElement));
        }
    };

    return (isLoading ? <Spinner /> :
        <div className={`book-container ${switchVal ? "light": "dark"}`}>
            <div className="book" id={id}>
                <h3 className="book-title">{title}</h3>
                
                <img className="thumbnail" src={imageLinks.thumbnail} alt="Book Cover"/>

                <p>{authors?.toString().replace(",", ", ")}</p>
            </div>
            <div className="btn-container">
                <button
                    id="completed-btn"
                    className="btn" 
                    onClick={
                        (e) => {
                            const targetElm = (e.target as HTMLButtonElement).parentElement?.previousElementSibling?.id;

                            handleAddToList(e, completedBooks, setCompletedBooks, targetElm);
                        }
                    } >
                    Add To Completed
                </button>
                <button
                    id="wishlist-btn"
                    className="btn"
                    onClick={
                        (e) => {
                            const targetElm = (e.target as HTMLButtonElement).previousElementSibling?.parentElement?.previousElementSibling?.id;

                            handleAddToList(e, wishlistBooks, setWishlistBooks, targetElm);
                        }
                    }>
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
}

export default SearchBook;
