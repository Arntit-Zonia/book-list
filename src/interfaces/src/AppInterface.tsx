// API REQUESTS

// App
export interface Books {
    "title": string;
    "subtitle": string;
    "authors": string[];
    "publisher": string,
    "publishedDate": string,
    "description": string
    "industryIdentifiers": {}[]
    "readingModes": {
        "text": boolean;
        "image": boolean;
    },
    "pageCount": number;
    "printType": string,
    "categories": string[]
    "averageRating": number;
    "ratingsCount": number;
    "maturityRating": string;
    "allowAnonLogging": boolean;
    "contentVersion": string;
    "panelizationSummary": {
        "containsEpubBubbles": boolean;
        "containsImageBubbles": boolean;
    },
    "imageLinks": {
        "smallThumbnail": string;
        "thumbnail": string;
    },
    "language": string;
    "previewLink": string;
    "infoLink": string;
    "canonicalVolumeLink": string;
}

// App
export interface BookSearchData {
    volumeInfo: Books;
}

export interface Theme {
    theme: boolean;
}

// PROPS

// Header
export interface HeaderProps {
    setRoute: React.Dispatch<React.SetStateAction<string>>;
    inputVal: string;
    setInputVal: React.Dispatch<React.SetStateAction<string>>;
    handleFormSubmit:  React.FormEventHandler<HTMLFormElement>;
    switchVal: boolean;
    setSwitchVal: React.Dispatch<React.SetStateAction<boolean>>;
    handleTheme: () => string; 
}

// BookList
export interface BookListProps {
    books: Books[];
    route: string;
    handleTheme: () => string;
}

// SearchBook
export interface SearchBookProps {
    book: Books;
    id: string;
    completed: Books[];
    setCompleted: React.Dispatch<React.SetStateAction<Books[]>>;
    wishList: Books[];
    setWishList: React.Dispatch<React.SetStateAction<Books[]>>;
    getTargetBookData: (targetBook: string | undefined) => Books;
    handleTheme: () => string;
}

// MyLists
export interface MyListsProps {
    completed: Books[];
    setCompleted: React.Dispatch<React.SetStateAction<Books[]>>;
    wishList: Books[];
    setWishList: React.Dispatch<React.
    SetStateAction<Books[]>>;
    route: string;
    handleTheme: () => string;
    loadCompletedBooks: boolean;
    setLoadCompletedBooks: React.Dispatch<React.SetStateAction<boolean>>;
    loadWishlistBooks: boolean;
    setLoadWishlistBooks: React.Dispatch<React.SetStateAction<boolean>>;
}