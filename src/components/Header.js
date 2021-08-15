import React from 'react';

import { getBookData } from '../api';

const Header = ({ selectVal, setSelectVal, inputVal, setInputVal, setBooks }) => {
    const handleSelectVal = (e) => setSelectVal(e.target.value);
    const handleInputVal = (e) => setInputVal(e.target.value);
    const handleSearchForm = (e) => {
        e.preventDefault();

        if (inputVal) {
            const bookData = [];

            getBookData(inputVal).then((books) => {
                books.forEach((book) => {
                    bookData.push(book.volumeInfo);
                });

                console.log(`Books Data: ${bookData}`);
            });
            
            setBooks(bookData);
            setInputVal("");
        }
    }

    return (
        <div className="header-container">
            <select className="route-options" value={selectVal} onChange={(e) => handleSelectVal(e)}>
                <option value="search" id="search">Search</option>
                <option value="my list" id="my-list">My List</option>
                <option value="my wishlist" id="wishlist">My Wishlist</option>
            </select>

            <form className="search-form" onSubmit={(e) => handleSearchForm(e)}>
                <input 
                    className="search-input" 
                    value={inputVal} 
                    type="text" 
                    onChange={(e) => handleInputVal(e)} placeholder="Search for a book"
                 />
            </form>
        </div>
    )
}

export default Header;