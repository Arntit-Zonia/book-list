import { useEffect, useState } from "react";
import { uploadBookData } from "../api";
import { Books, SearchBookProps } from "../interfaces/src/AppInterface";
import Spinner from "./Spinner";

const Book: React.FC<SearchBookProps> = ({ book: { title, authors, imageLinks }, id, completed, setCompleted, wishList, setWishList, getTargetBookData, handleTheme, isLoading, setIsLoading }) => {
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (isLoading) setTimeout(() => setIsLoading(false), 500);
    }, [title]);

    const handleAddToList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, list: Books[], setList: React.Dispatch<React.SetStateAction<Books[]>>, siblingElement: string | undefined) => {
        const targetId = (e.target as HTMLElement).id;

        const existingBook = list.find((book: Books): boolean => book.imageLinks.thumbnail === getTargetBookData(siblingElement)?.imageLinks.thumbnail);

        if (!existingBook) {
            setList([...list, getTargetBookData(siblingElement)]);
    
            targetId === "completed-btn" ? uploadBookData("completed", getTargetBookData(siblingElement)) : uploadBookData("wishlist", getTargetBookData(siblingElement));
        }
    };

    return (isLoading ? <Spinner /> :
        <div className={`book-container ${handleTheme()}`}>
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
                            const targetElm = (e.target as HTMLInputElement).parentElement?.previousElementSibling?.id;

                            handleAddToList(e, completed, setCompleted, targetElm);
                        }
                    } >
                    Add To Completed
                </button>
                <button
                    id="wishlist-btn" 
                    className="btn"
                    onClick={
                        (e) => {
                            const targetElm = (e.target as HTMLInputElement).previousElementSibling?.parentElement?.previousElementSibling?.id;

                            handleAddToList(e, wishList, setWishList, targetElm);
                        }
                    }>
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
}

export default Book;
