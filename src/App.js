import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
    const [selectVal, setSelectVal] = useState("search");
    const [inputVal, setInputVal] = useState("");

    return (
        <div className="App">
            <Header 
                selectVal={selectVal} 
                setSelectVal={setSelectVal}
                setInputVal={setInputVal} 
                inputVal={inputVal}
            />
        </div>
    );
}

export default App;
