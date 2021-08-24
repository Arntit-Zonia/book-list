import React from 'react';

const Header = ({ setRoute, inputVal, setInputVal, handleFormSubmit }) => {
    const handleSelectVal = (e) => setRoute(e.target.innerHTML);
    const handleInputVal = (e) => setInputVal(e.target.value);

    return (
        <div className="header-container">
            <div id="search" onClick={handleSelectVal}>Search</div>
            <div id="completed" onClick={handleSelectVal}>Completed</div>
            <div id="wishlist" onClick={handleSelectVal}>Wishlist</div>

            <form className="search-form" onSubmit={handleFormSubmit}>
                <input 
                    className="search-input" 
                    value={inputVal} 
                    type="text" 
                    onChange={handleInputVal} placeholder="Search"
                 />
            </form>
        </div>
    )
}

export default Header;