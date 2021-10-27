import { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { getBooksData, uploadBookData } from '../api';
import { State } from '../state/reducers';
import * as actionCreators from "../state/action-creators/index";
import { Books } from '../interfaces/src/AppInterface';
import Spinner from './Spinner';
import { ActionTypes } from '../state/action-types';
import { booksAction } from '../state/interfaces/interfaces';

const MyList: React.FC = () => {
    const { completedBooks, wishlistBooks, route, themeValue, loadCompletedBooks, loadWishlistBooks, isLoading } = useSelector((state: State) => state);
    const { setCompletedBooks, setWishlistBooks, setLoadCompletedBooks, setLoadWishlistBooks, setIsLoading } = bindActionCreators(actionCreators, useDispatch());

    useEffect(() => {
        if (loadCompletedBooks && route === "Completed") {
            console.log("Loading Completed Books...");

            setIsLoading(true);

            getBooksData("completed").then((data) => {
                setCompletedBooks(data);

                console.log("Completed Books Loaded!");

                setLoadCompletedBooks(false);
                setIsLoading(false);
            });
        }

        if (loadWishlistBooks && route === "Wishlist") {
            console.log("Loading Wishlist Books...");

            setIsLoading(true);

            getBooksData("wishlist").then((data) => {
                setWishlistBooks(data);

                console.log("Wishlist Books Loaded!");

                setLoadWishlistBooks(false);
                setIsLoading(false);
            });
        }
    }, [route]);

    const handleRemoveBook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, list: Books[], setList:{ (books: Books[]): (dispatch: Dispatch<booksAction<ActionTypes.COMPLETED_BOOKS>>) => void;} | { (books: Books[]): (dispatch: Dispatch<booksAction<ActionTypes.WISHLIST_BOOKS>>) => void;}) => {
        const targetElm = (e.target as HTMLInputElement).parentElement?.previousElementSibling?.id;

        const filteredList = list?.filter((_book, i) => i !== Number(targetElm));
        const removedBook = list?.filter((_book, i) => i === Number(targetElm))[0];

        route === "Completed" ? uploadBookData("completed/delete", removedBook) 
        : uploadBookData("wishlist/delete", removedBook);    

        setList(filteredList);
    }

    const renderList = (list: Books[], setList: { (books: Books[]): (dispatch: Dispatch<booksAction<ActionTypes.COMPLETED_BOOKS>>) => void;} | { (books: Books[]): (dispatch: Dispatch<booksAction<ActionTypes.WISHLIST_BOOKS>>) => void;}) => {
        return list?.map((data, i) => (
            <div className={`book-container ${themeValue}`} key={i}>
                <div className="book" id={i.toString()}>
                    <h3 className="book-title">{data.title}</h3>
                    
                    <img className="thumbnail" src={data.imageLinks?.thumbnail} alt="Book Cover"/>
    
                    <p>{data.authors?.toString().replace(",", ", ")}</p>
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={(e) => handleRemoveBook(e, list, setList)}>Remove Book</button>
                </div>
            </div>
        ))
    }

    return (
        <>
            {
                isLoading ? <Spinner /> : route === "Completed" ? renderList(completedBooks, setCompletedBooks) :
                renderList(wishlistBooks, setWishlistBooks)
            }
        </>
    )
}

export default MyList;