import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import Header from './components/Header';

import { getBookSearchData } from './api';
import "./styles/style.css";

const App = () => {
    const [route, setRoute] = useState("Search");
    const [inputVal, setInputVal] = useState("");
    const [books, setBooks] = useState([]);
 
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
        <div className="app">
            <Header  
                setRoute={setRoute}
                setInputVal={setInputVal} 
                inputVal={inputVal}
                setBooks={setBooks}
                handleFormSubmit={handleFormSubmit}
            />

            <BookList books={books} route={route} />
        </div>
    );
}

export default App;
