import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import Header from './components/Header';

import { getBookSearchData, getTheme } from './api';
import "./styles/style.css";

const App = () => {
    const [route, setRoute] = useState("Search");
    const [inputVal, setInputVal] = useState("");
    const [books, setBooks] = useState([]);
    const [switchVal, setSwitchVal] = useState();

    const handleTheme = () => switchVal ? "light" : "dark";

    useEffect(() => {
        getTheme().then((bool) => setSwitchVal(bool));
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = handleTheme() === "light" ? "whitesmoke" : "black";
    }, [switchVal]);

    useEffect(() => {  
        const bookTitles = books.map( (book) => book.title);
        const filteredData = books.filter(({title}, i) => !bookTitles.includes(title, i + 1));

        setBooks(filteredData);
    }, [inputVal]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (inputVal) {
            const bookData = [];

            getBookSearchData(inputVal).then((books) => {
                books.forEach((book) => {
                    bookData.push(book.volumeInfo);
                });

                setBooks(bookData);
                setInputVal("");
                setRoute("Search");
            });
        }
    }

    return (
        <div className={`app ${handleTheme()}`}>
            <Header  
                setRoute={setRoute}
                setInputVal={setInputVal} 
                inputVal={inputVal}
                setBooks={setBooks}
                handleFormSubmit={handleFormSubmit}
                switchVal={switchVal}
                setSwitchVal={setSwitchVal}
                handleTheme={handleTheme}
            />

            <BookList
                books={books}
                route={route}
                handleTheme={handleTheme}
            />
        </div>
    );
}

export default App;
