import { combineReducers } from "redux";

import { searchBooks, inputVal, isLoading, route, switchVal, themeValue, completedBooks, wishlistBooks, loadCompletedBooks, loadWishlistBooks } from "./reducers";

const reducers = combineReducers({
    searchBooks,
    inputVal,
    isLoading,
    route,
    switchVal,
    themeValue,
    completedBooks,
    wishlistBooks,
    loadCompletedBooks,
    loadWishlistBooks
});

export type State = ReturnType<typeof reducers>

export default reducers;