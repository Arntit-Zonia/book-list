import axios from "axios";

export const getBookData = async (query) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const { data: { items } } = await axios.get(URL);
    
    console.log(items);

    return items;
};