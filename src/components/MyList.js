import React from 'react'

const MyList = ({ book }) => {
    console.log(book);

    return (
        (book?.map((data) => (
            <div className="my-list-container">
                <div className="book">
                    <h3>{data.title}</h3>
                    
                    <img src={data.imageLinks.thumbnail}/>
    
                    <p>{data.authors?.toString().replace(",", ", ")}</p>
                </div>
            </div>
        )))
    )
}

export default MyList;