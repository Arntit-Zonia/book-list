import React, { useState } from 'react';
import Switch from "react-switch";

const Header = ({ setRoute, inputVal, setInputVal, handleFormSubmit }) => {
    const handleSelectVal = (e) => setRoute(e.target.innerHTML);
    const handleInputVal = (e) => setInputVal(e.target.value);
    const [switchVal, setSwitchVal] = useState(true);

    const handleSwitchVal = (e) => setSwitchVal(e)
    const handleTheme = () => switchVal ? "light" : "dark";

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
                    onColor={"#fff"}
                    offColor={"#000"}
                    onHandleColor={"#000"}
                    offHandleColor={"#fff"}
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