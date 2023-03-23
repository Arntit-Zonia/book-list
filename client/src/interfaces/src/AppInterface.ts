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

export interface BookSearchResult<TResult> {
    items: TResult[];
};

export interface BookSearchData {
    volumeInfo: Books;
}

export interface BooksResponse {
    data: Books[]
};

export interface ThemeResponse {
    data: Theme
}

export interface Theme {
    theme: boolean;
}