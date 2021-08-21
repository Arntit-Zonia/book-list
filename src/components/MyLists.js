import React from 'react'

import { uploadBookData } from '../api';

const MyList = ({ completed, setCompleted, wishList, setWishList, route }) => {
    const handleRemoveBook = (e, list, setList) => {
        const filteredList = list?.filter((book, i) => i !== Number(e.target.previousElementSibling.id));
        const removedBook = list?.find((book, i) => i === Number(e.target.previousElementSibling.id));

        route === "Completed" ? uploadBookData("completed/delete", removedBook) 
        : uploadBookData("wishlist/delete", removedBook);    

        setList(filteredList);
    }

    const renderList = (list, setList) => {
        return list?.map((data, i) => (
            <div className="my-list-container" key={i}>
                <div className="book" id={i}>
                    <h3>{data.title}</h3>
                    
                    <img src={data.imageLinks?.thumbnail} alt="Book Cover"/>
    
                    <p>{data.authors?.toString().replace(",", ", ")}</p>
                </div>

                <button onClick={(e) => handleRemoveBook(e, list, setList)}>Remove Book</button>
            </div>
        ))
    }

    return (
        route === "Completed" ? renderList(completed, setCompleted) 
        : renderList(wishList, setWishList)
    )
}

export default MyList;