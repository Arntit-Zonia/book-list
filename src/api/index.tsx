import axios, { AxiosResponse } from "axios";
import { Books, BookSearchData, Theme } from "../interfaces/src/AppInterface";

export const getBookSearchData = async (query: string): Promise<BookSearchData[]> => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const { data: { items } } = await axios.get(URL);
    
    console.log(items);

    return items;
};

export const getBooksData = async (type: string): Promise<Books[]> => {
    const URL = `http://localhost:4000/load/${type}`;
    const {data: { data }} = await axios.get(URL);

    return data;
}

export const uploadBookData = async (type: string, requestBody: Books): Promise<AxiosResponse<Books>> => {
    const URL = `http://localhost:4000/${type}`;
    const uploadData = await axios.post(URL, requestBody);

    return uploadData;
}

export const getTheme = async (): Promise<boolean> => {
    const URL = "http://localhost:4000/theme";
    const {data: { data }} = await axios.get(URL);

    return data.theme;
}

export const uploadTheme = async (type: string, requestBody: Theme): Promise<AxiosResponse<Theme>> => {
    const URL = `http://localhost:4000/${type}`;
    const uploadData = await axios.post(URL, requestBody);

    return uploadData;
}