import { Books } from "../../interfaces/src/AppInterface";

export interface stringAction<T> {
    type: T;
    payload: string;
}

export interface booksAction<T> {
    type: T;
    payload: Books[];
}

export interface booleanAction<T> {
    type: T;
    payload: boolean;
}