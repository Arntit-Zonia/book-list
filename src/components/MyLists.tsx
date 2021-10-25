import { useEffect } from 'react';

import { getBooksData, uploadBookData } from '../api';
import { Books, MyListsProps } from '../interfaces/src/AppInterface';
import Spinner from './Spinner';

const MyList: React.FC<MyListsProps> = ({ completed, setCompleted, wishList, setWishList, route, handleTheme, loadCompletedBooks, setLoadCompletedBooks, loadWishlistBooks, setLoadWishlistBooks, isLoading, setIsLoading }) => {
    useEffect(() => {
        if (loadCompletedBooks && route === "Completed") {
            console.log("Loading Completed Books...");

            setIsLoading(true);

            getBooksData("completed").then((data) => {
                setCompleted(data);

                console.log("Completed Books Loaded!");

                setLoadCompletedBooks(false);
                setIsLoading(false);
            });
        }

        if (loadWishlistBooks && route === "Wishlist") {
            console.log("Loading Wishlist Books...");

            setIsLoading(true);

            getBooksData("wishlist").then((data) => {
                setWishList(data);

                console.log("Wishlist Books Loaded!");

                setLoadWishlistBooks(false);
                setIsLoading(false);
            });
        }
    }, [route]);

    const handleRemoveBook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, list: Books[], setList: React.Dispatch<React.SetStateAction<Books[]>>) => {
        const targetElm = (e.target as HTMLInputElement).parentElement?.previousElementSibling?.id;

        const filteredList = list?.filter((_book, i) => i !== Number(targetElm));
        const removedBook = list?.filter((_book, i) => i === Number(targetElm))[0];

        route === "Completed" ? uploadBookData("completed/delete", removedBook) 
        : uploadBookData("wishlist/delete", removedBook);    

        setList(filteredList);
    }

    const renderList = (list: Books[], setList: React.Dispatch<React.SetStateAction<Books[]>>) => {
        return list?.map((data, i) => (
            <div className={`book-container ${handleTheme()}`} key={i}>
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
                isLoading ? <Spinner /> : route === "Completed" ? renderList(completed, setCompleted) :
                renderList(wishList, setWishList)
            }
        </>
    )
}

export default MyList;