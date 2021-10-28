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
    const { switchVal } = useSelector((state: State) => state);
    const { setSwitchVal } = bindActionCreators(actionCreators, useDispatch());

    useEffect(() => {
        // retrieves theme value stored in the db
        getTheme().then((bool) => setSwitchVal(bool));
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = switchVal ? "#ecf0f1" : "#1e272e";
    }, [switchVal]);

    return (
        <div className={`app ${switchVal ? "light": "dark"}`}>
            <Header />
            <BookList />
        </div>
    );
}

export default App;