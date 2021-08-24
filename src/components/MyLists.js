import React from 'react'

import { uploadBookData } from '../api';

const MyList = ({ completed, setCompleted, wishList, setWishList, route }) => {
    const handleRemoveBook = (e, list, setList) => {
        const filteredList = list?.filter((book, i) => i !== Number(e.target.parentNode.previousElementSibling.id));
        const removedBook = list?.find((book, i) => i === Number(e.target.parentNode.previousElementSibling.id));

        route === "Completed" ? uploadBookData("completed/delete", removedBook) 
        : uploadBookData("wishlist/delete", removedBook);    

        setList(filteredList);
    }

    const renderList = (list, setList) => {
        return list?.map((data, i) => (
            <div className="book-container" key={i}>
                <div className="book" id={i}>
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
        route === "Completed" ? renderList(completed, setCompleted) 
        : renderList(wishList, setWishList)
    )
}

export default MyList;