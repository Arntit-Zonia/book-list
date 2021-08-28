import React from 'react';
import Switch from "react-switch";

const Header = ({ setRoute, inputVal, setInputVal, handleFormSubmit, switchVal, setSwitchVal, handleTheme }) => {
    const handleSelectVal = (e) => setRoute(e.target.innerHTML);
    const handleInputVal = (e) => setInputVal(e.target.value);
    const handleSwitchVal = (e) => setSwitchVal(e)

    return (
        <div className={`header-container ${handleTheme()}`}>
            <div id="search" onClick={handleSelectVal}>Search</div>
            <div id="completed" onClick={handleSelectVal}>Completed</div>
            <div id="wishlist" onClick={handleSelectVal}>Wishlist</div>
            <label className="switch-container">
                <span className="switch-copy">
                    {switchVal ? "Light" : "Dark"} Theme
                </span>
                <Switch
                    className="switch"
                    onChange={handleSwitchVal}
                    onColor={"#000"}
                    offColor={"#fff"}
                    onHandleColor={"#fff"}
                    offHandleColor={"#000"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checked={switchVal} 
                />
            </label>

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