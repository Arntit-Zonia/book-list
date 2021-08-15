import React from 'react';

const Header = ({ selectVal, setSelectVal, inputVal, setInputVal }) => {
    const handleSelectVal = (e) => setSelectVal(e.target.value);
    const handleInputVal = (e) => setInputVal(e.target.value);
    const handleSearchForm = (e) => {
        e.preventDefault();

        if (inputVal) {
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
                <input className="search-input" value={inputVal} type="text" onChange={(e) => handleInputVal(e)} placeholder="Search for a book" />
            </form>
        </div>
    )
}

export default Header;