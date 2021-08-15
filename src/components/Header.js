import React from 'react';

const Header = ({ selectVal, setSelectVal, setInputVal }) => {
    const handleSelectVal = (e) => setSelectVal(e.target.value);
    const handleInputVal = (e) => setInputVal(e.target.value);

    return (
        <div className="header-container">
            <select className="route-options" value={selectVal} onChange={(e) => handleSelectVal(e)}>
                <option value="search" id="search">Search</option>
                <option value="my list" id="my-list">My List</option>
                <option value="my wishlist" id="wishlist">My Wishlist</option>
            </select>

            <form className="search-form" onSubmit={(e) => handleInputVal(e)}>
                <input className="search-input" type="text" onChange={(e) => handleInputVal(e)} placeholder="Search for a book" />
            </form>
        </div>
    )
}

export default Header;