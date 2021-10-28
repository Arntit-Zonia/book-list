import React from 'react';
import Switch from "react-switch";
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { uploadTheme } from '../api';
import { State } from '../state/reducers';
import * as actionCreators from "../state/action-creators/index";
import { getBookSearchData } from '../api';
import { Books } from "../interfaces/src/AppInterface";

const Header: React.FC = () => {
    const { inputVal, switchVal } = useSelector((state: State) => state);
    const { setRoute, setInputVal, setSwitchVal, setIsLoading, setSearchBooks } = bindActionCreators(actionCreators, useDispatch());

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputVal) {
            const bookData: Books[] = [];

            setIsLoading(true);

            getBookSearchData(inputVal).then((books) => {
                books.forEach((book) => {
                    bookData.push(book.volumeInfo);
                });

                const bookTitles = bookData.map((book) => book.title);
                const filteredData = bookData.filter(({ title }, i) => !bookTitles.includes(title, i + 1));
        
                setSearchBooks(filteredData);

                setInputVal("");
                setRoute("Search");

                document.querySelectorAll(".selected").forEach((elm) => elm.classList.remove("selected"));
                document.querySelector("#search")?.classList.add("selected");
            });
        }
    }

    const handleInputVal = (e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value);

    const handleSwitchVal = (e: boolean) => {
        setSwitchVal(e);
        uploadTheme("theme/upload", { theme: e });
    }

    const handleSelectVal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement;

        document.querySelectorAll(".selected").forEach((elm) => elm.classList.remove("selected"));
        target.classList.add("selected");

        setRoute(target.innerHTML);
    }

    return (
        <div className={`header-container ${switchVal ? "light": "dark"}`}>
            <div id="search" className="selected" onClick={handleSelectVal}>Search</div>
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