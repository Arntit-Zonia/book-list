import React, { useState } from 'react';
import BookList from './components/BookList';
import Header from './components/Header';

import { getBookSearchData } from './api';

const App = () => {
    const [route, setRoute] = useState("Search");
    const [inputVal, setInputVal] = useState("");
    const [books, setBooks] = useState([]);
 
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
        <div className="App">
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
