import React, { useState, useEffect } from 'react';

import BookList from './components/BookList';
import Header from './components/Header';
import { getBookSearchData, getTheme } from './api';
import { Books } from "./interfaces/src/AppInterface";

import "./styles/style.css";

const App = () => {
    const [route, setRoute] = useState("Search");
    const [inputVal, setInputVal] = useState("");
    const [books, setBooks] = useState<Books[]>([]);
    const [switchVal, setSwitchVal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleTheme = (): string => switchVal ? "light" : "dark";

    useEffect(() => {
        getTheme().then((bool) => setSwitchVal(bool));
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = handleTheme() === "light" ? "#ecf0f1" : "#1e272e";
    }, [switchVal]);

    useEffect(() => {  
        const bookTitles = books.map( (book) => book.title);
        const filteredData = books.filter(({ title }, i) => !bookTitles.includes(title, i + 1));

        setBooks(filteredData);
    }, [inputVal]);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputVal) {
            const bookData: Books[] = [];

            setIsLoading(true);

            getBookSearchData(inputVal).then((books) => {
                books.forEach((book) => {
                    bookData.push(book.volumeInfo);
                });

                setBooks(bookData);
                setInputVal("");
                setRoute("Search");

                document.querySelectorAll(".selected").forEach((elm) => elm.classList.remove("selected"));
                document.querySelector("#search")?.classList.add("selected");
            });
        }
    }

    return (
        <div className={`app ${handleTheme()}`}>
            <Header  
                setRoute={setRoute}
                setInputVal={setInputVal} 
                inputVal={inputVal}
                handleFormSubmit={handleFormSubmit}
                switchVal={switchVal}
                setSwitchVal={setSwitchVal}
                handleTheme={handleTheme}
            />

            <BookList
                books={books}
                route={route}
                handleTheme={handleTheme}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </div>
    );
}

export default App;
