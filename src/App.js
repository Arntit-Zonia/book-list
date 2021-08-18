import React, { useState } from 'react';
import BookList from './components/BookList';
import Header from './components/Header';

import { getBookData } from './api';

const App = () => {
    const [selectVal, setSelectVal] = useState("search");
    const [inputVal, setInputVal] = useState("");
    const [books, setBooks] = useState([]);
 
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (inputVal) {
            const bookData = [];

            getBookData(inputVal).then((books) => {
                books.forEach((book) => {
                    bookData.push(book.volumeInfo);
                });

                setBooks(bookData);
                setInputVal("");
                setSelectVal("search"); 
            });
        }
    }

    return (
        <div className="App">
            <Header 
                selectVal={selectVal} 
                setSelectVal={setSelectVal}
                setInputVal={setInputVal} 
                inputVal={inputVal}
                setBooks={setBooks}
                handleFormSubmit={handleFormSubmit}
            />

            <BookList books={books} selectVal={selectVal} />
        </div>
    );
}

export default App;
