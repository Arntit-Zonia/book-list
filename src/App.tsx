import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import BookList from './components/BookList';
import Header from './components/Header';
import { getTheme } from './api';
import * as actionCreators from "./state/action-creators/index";

import "./styles/style.css";
import { State } from './state/reducers';

const App = () => {
    const { switchVal, themeValue } = useSelector((state: State) => state);
    const { setSwitchVal, getThemeValue } = bindActionCreators(actionCreators, useDispatch());

    // returns "light" or "dark";
    getThemeValue(switchVal);

    useEffect(() => {
        // retrieves theme value stored in the db
        getTheme().then((bool) => setSwitchVal(bool));
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = themeValue === "light" ? "#ecf0f1" : "#1e272e";
    }, [switchVal]);

    return (
        <div className={`app ${themeValue}`}>
            <Header />
            <BookList />
        </div>
    );
}

export default App;
