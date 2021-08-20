import axios from "axios";

export const getBookSearchData = async (query) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const { data: { items } } = await axios.get(URL);
    
    console.log(items);

    return items;
};

export const getBooksData = async (type) => {
    const URL = `http://localhost:4000/${type}`;
    const {data: { data }} = await axios.get(URL);

    return data;
}