import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import BookList from './components/BookList';
import Header from './components/Header';
import { getTheme } from './api';
import * as actionCreators from "./state/action-creators/index";
import { State } from './state/reducers';
import themeColors from './themeColors';
import "./styles/style.css";

const App = () => {
    const { switchVal } = useSelector((state: State) => state);
    const { setSwitchVal } = bindActionCreators(actionCreators, useDispatch());
    const { LIGHT, DARK } = themeColors;

    useEffect(() => {
        // retrieves theme value stored in the db
        getTheme().then((bool) => setSwitchVal(bool));
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = switchVal ? LIGHT : DARK;
    }, [switchVal]);

    return (
        <div className={`app ${switchVal ? "light": "dark"}`}>
            <Header />
            <BookList />
        </div>
    );
}

export default App;