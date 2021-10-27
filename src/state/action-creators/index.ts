import { Dispatch } from "redux";

import { ActionTypes } from "../action-types";
import { Books } from "../../interfaces/src/AppInterface";
import { booksAction, booleanAction, stringAction } from "../interfaces/interfaces";

export const setRoute = (route: string) => (dispatch: Dispatch<stringAction<ActionTypes.COMPLETED_ROUTE | ActionTypes.WISHLIST_ROUTE>>) => {
    dispatch({ type: ActionTypes.COMPLETED_ROUTE || ActionTypes.WISHLIST_ROUTE, payload: route });
}

export const setInputVal = (inputVal: string) => (dispatch: Dispatch<stringAction<ActionTypes.INPUT_VAL>>) => {
    dispatch({ type: ActionTypes.INPUT_VAL, payload: inputVal });
}

export const setSearchBooks = (books: Books[]) => (dispatch: Dispatch<booksAction<ActionTypes.SEARCH_BOOKS>>) => {
    dispatch({ type: ActionTypes.SEARCH_BOOKS, payload: books });
}

export const setCompletedBooks = (books: Books[]) => (dispatch: Dispatch<booksAction<ActionTypes.COMPLETED_BOOKS>>) => {
    dispatch({ type: ActionTypes.COMPLETED_BOOKS, payload: books });
}

export const setWishlistBooks = (books: Books[]) => (dispatch: Dispatch<booksAction<ActionTypes.WISHLIST_BOOKS>>) => {
    dispatch({ type: ActionTypes.WISHLIST_BOOKS, payload: books });
}

export const setSwitchVal = (switchVal: boolean) => (dispatch: Dispatch<booleanAction<ActionTypes.SWITCH_VAL>>) => {
    dispatch({ type: ActionTypes.SWITCH_VAL, payload: switchVal });
}

export const setIsLoading = (isLoading: boolean) => (dispatch: Dispatch<booleanAction<ActionTypes.IS_LOADING>>) => {
    dispatch({ type: ActionTypes.IS_LOADING, payload: isLoading });
}

export const getThemeValue = (themeVal: boolean) => (dispatch: Dispatch<stringAction<ActionTypes.THEME_VALUE>>) => {
    const payloadVal =  themeVal ? "light" : "dark";

    dispatch({ type: ActionTypes.THEME_VALUE, payload: payloadVal });
}

export const setLoadCompletedBooks = (loading: boolean) => (dispatch: Dispatch<booleanAction<ActionTypes.LOAD_COMPLETED_BOOKS>>) => {
    dispatch({ type: ActionTypes.LOAD_COMPLETED_BOOKS, payload: loading });
}

export const setLoadWishlistBooks = (loading: boolean) => (dispatch: Dispatch<booleanAction<ActionTypes.LOAD_WISHLIST_BOOKS>>) => {
    dispatch({ type: ActionTypes.LOAD_WISHLIST_BOOKS, payload: loading });
}