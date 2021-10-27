import { Books } from "../../interfaces/src/AppInterface";
import { ActionTypes } from "../action-types";
import { booksAction, booleanAction, stringAction } from "../interfaces/interfaces";

export const route = (state = "Search", action: stringAction<ActionTypes.COMPLETED_ROUTE | ActionTypes.WISHLIST_ROUTE>) => {
	switch (action.type) {
		case ActionTypes.COMPLETED_ROUTE:
			return action.payload;
		case ActionTypes.WISHLIST_ROUTE:
			return action.payload;
		default:
			return state;
	}
};

export const inputVal = (state = "", action: stringAction<ActionTypes.INPUT_VAL>) => {
	switch (action.type) {
		case ActionTypes.INPUT_VAL:
			return action.payload;
		default:
			return state;
	}
};

export const searchBooks = (state: Books[] = [], action: booksAction<ActionTypes.SEARCH_BOOKS>) => {
	switch (action.type) {
		case ActionTypes.SEARCH_BOOKS:
			return action.payload;
		default:
			return state;
	}
};

export const completedBooks = (state: Books[] = [], action: booksAction<ActionTypes.COMPLETED_BOOKS>) => {
	switch (action.type) {
		case ActionTypes.COMPLETED_BOOKS:
			return action.payload;
		default:
			return state;
	}
};

export const wishlistBooks = (state: Books[] = [], action: booksAction<ActionTypes.WISHLIST_BOOKS>) => {
	switch (action.type) {
		case ActionTypes.WISHLIST_BOOKS:
			return action.payload;
		default:
			return state;
	}
};

export const switchVal = (state = false, action: booleanAction<ActionTypes.SWITCH_VAL>) => {
	switch (action.type) {
		case  ActionTypes.SWITCH_VAL:
			return action.payload;
		default:
			return state;
	}
};

export const isLoading = (state = true, action: booleanAction<ActionTypes.IS_LOADING>) => {
	switch (action.type) {
		case ActionTypes.IS_LOADING:
			return action.payload;
		default:
			return state;
	}
};

export const themeValue = (state = "dark", action: stringAction<ActionTypes.THEME_VALUE>) => {
	switch (action.type) {
		case ActionTypes.THEME_VALUE:
			return action.payload;
		default:
			return state;
	}
};

export const loadCompletedBooks = (state = true, action: booleanAction<ActionTypes.LOAD_COMPLETED_BOOKS>) => {
	switch (action.type) {
		case ActionTypes.LOAD_COMPLETED_BOOKS:
			return action.payload;
		default:
			return state;
	}
};

export const loadWishlistBooks = (state = true, action: booleanAction<ActionTypes.LOAD_WISHLIST_BOOKS>) => {
	switch (action.type) {
		case ActionTypes.LOAD_WISHLIST_BOOKS:
			return action.payload;
		default:
			return state;
	}
};